﻿/*
 * (c) Copyright Ascensio System SIA 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

(function(window, undefined) {
	var openXml = {};

	function SaxParserBase() {
		this.depth = 0;
		this.depthSkip = null;
		this.context = null;
		this.contextStack = [];
	}

	SaxParserBase.prototype.onError = function(msg) {
		throw new Error(msg);
	};
	SaxParserBase.prototype.onStartNode = function(elem, getAttrs, isTagEnd, getStringNode) {
		this.depth++;
		if (!this.isSkip()) {
			var newContext;
			if (this.context.onStartNode) {
				newContext = this.context.onStartNode.call(this.context, elem, getAttrs, EasySAXParser.entityDecode, isTagEnd, getStringNode);
				if (!newContext) {
					this.skip();
				}
			}
			if (!this.isSkip() && !isTagEnd) {
				this.context = newContext ? newContext : this.context;
				this.contextStack.push(this.context);
			}
		}
	};
	SaxParserBase.prototype.onTextNode = function(text) {
		if (this.context && this.context.onTextNode) {
			this.context.onTextNode.call(this.context, text, EasySAXParser.entityDecode);
		}
	};
	SaxParserBase.prototype.onEndNode = function(elem, isTagStart, getStringNode) {
		this.depth--;
		var isSkip = this.isSkip();
		if (isSkip && this.depth <= this.depthSkip) {
			this.depthSkip = null;
		}
		if (!isSkip){
			var prevContext = this.context;
			if(!isTagStart){
				this.contextStack.pop();
				this.context = this.contextStack[this.contextStack.length - 1];
			}
			if (this.context && this.context.onEndNode) {
				this.context.onEndNode.call(this.context, prevContext, elem, EasySAXParser.entityDecode, isTagStart, getStringNode);
			}
		}
	};
	SaxParserBase.prototype.skip = function() {
		this.depthSkip = this.depth - 1;
	};
	SaxParserBase.prototype.isSkip = function() {
		return null !== this.depthSkip
	};
	SaxParserBase.prototype.parse = function(xml, context) {
		var t = this;
		this.context = context;
		var parser = new EasySAXParser({'autoEntity': false});
		parser.on('error', function() {
			t.onError.apply(t, arguments);
		});
		parser.on('startNode', function() {
			t.onStartNode.apply(t, arguments);
		});
		parser.on('textNode', function() {
			t.onTextNode.apply(t, arguments);
		});
		parser.on('endNode', function() {
			t.onEndNode.apply(t, arguments);
		});
		parser.parse(xml);
	};

	openXml.SaxParserBase = SaxParserBase;
	openXml.SaxParserDataTransfer = {};

	function ContentTypes(){
		this.Defaults = {};
		this.Overrides = {};
	}
	ContentTypes.prototype.onStartNode = function(elem, attr, uq, tagend, getStrNode) {
		var attrVals;
		if ('Default' === elem) {
			if (attr()) {
				attrVals = attr();
				this.Defaults[attrVals['Extension']] = attrVals['ContentType'];
			}
		} else if ('Override' === elem) {
			if (attr()) {
				attrVals = attr();
				this.Overrides[attrVals['PartName']] = attrVals['ContentType'];
			}
		}
		return this;
	};
	ContentTypes.prototype.toXml = function(writer) {
		writer.Seek(0);
		writer.WriteXmlString("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>");
		writer.WriteXmlNodeStart("Types");
		writer.WriteXmlString(" xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\"");
		writer.WriteXmlNodeEnd("Types", true);
		for (var ext in this.Defaults) {
			if (this.Defaults.hasOwnProperty(ext)) {
				writer.WriteXmlNodeStart("Default");
				writer.WriteXmlAttributeStringEncode("Extension", ext);
				writer.WriteXmlAttributeStringEncode("ContentType", this.Defaults[ext]);
				writer.WriteXmlNodeEnd("Default", true, true);
			}
		}
		for (var partName in this.Overrides) {
			if (this.Overrides.hasOwnProperty(partName)) {
				writer.WriteXmlNodeStart("Override");
				writer.WriteXmlAttributeStringEncode("PartName", partName);
				writer.WriteXmlAttributeStringEncode("ContentType", this.Overrides[partName]);
				writer.WriteXmlNodeEnd("Override", true, true);
			}
		}
		writer.WriteXmlNodeEnd("Types");
		return writer.GetDataUint8();
	};
	ContentTypes.prototype.add = function(partName, contentType) {
		var exti = partName.lastIndexOf(".");
		var ext = partName.substring(exti + 1);
		var res = !(this.Overrides[partName] && this.Defaults[ext]);
		if (contentType) {
			this.Overrides[partName] = contentType;
		}
		this.Defaults[ext] = "application/xml";//todo mime type
		return res;
	};
	function Rels(pkg, part){
		this.pkg = pkg;
		this.part = part;
		this.rels = [];
		this.nextRId = 1;
	}

	Rels.prototype.onStartNode = function(elem, attr, uq, tagend, getStrNode) {
		var attrVals;
		if ('Relationships' === elem) {
		} else if ('Relationship' === elem) {
			if (attr()) {
				attrVals = attr();
				var rId = attrVals["Id"] || "";
				var targetMode = attrVals["TargetMode"] || null;
				var theRel = new openXml.OpenXmlRelationship(this.pkg, this.part, rId, attrVals["Type"],
					attrVals["Target"], targetMode);
				this.rels.push(theRel);
				if (rId.startsWith("rId")) {
					this.nextRId = Math.max(this.nextRId, parseInt(rId.substring("rId").length) || 1);
				}
			}
		}
		return this;
	};
	Rels.prototype.toXml = function(writer) {
		writer.Seek(0);
		writer.WriteXmlString("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>");
		writer.WriteXmlNodeStart("Relationships");
		writer.WriteXmlString(" xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\"");
		writer.WriteXmlNodeEnd("Relationships", true);
		this.rels.forEach(function(elem){
			elem.toXml(writer, "Relationship");
		});
		writer.WriteXmlNodeEnd("Relationships");
		return writer.GetDataUint8();
	};
	Rels.prototype.getNextRId = function() {
		return "rId" + (this.nextRId++);
	};


	/******************************** OpenXmlPackage ********************************/
	function openFromZip(zip, pkg) {
		var ctf = zip.files["[Content_Types].xml"];
		if (ctf) {
			new SaxParserBase().parse(ctf.sync("string"), pkg.cntTypes);
		}
		for (var f in zip.files) {
			if (zip.files.hasOwnProperty(f)) {
				if (!f.endsWith("/")) {
					var f2 = f;
					var contentType = null;
					if (f !== "[Content_Types].xml") {
						f2 = "/" + f;
						contentType = pkg.getContentType(f2);
					}
					pkg.parts[f2] = new openXml.OpenXmlPart(pkg, f2, contentType);
				}
			}
		}
	}

	openXml.OpenXmlPackage = function(zip, xmlWriter) {
		this.zip = zip;
		this.xmlWriter = xmlWriter;
		this.parts = {};
		this.cntTypes = new ContentTypes();
		this.fileNameIndexes = {};

		openFromZip(this.zip, this);
	}

	openXml.OpenXmlPackage.prototype.removePart = function (uri) {
		var removePart = this.parts[uri];
		if(removePart) {
			delete this.parts[uri];
			this.zip.removeFile(removePart.getUriRelative());
		}
		return removePart;
	}
	openXml.OpenXmlPackage.prototype.generateNextFilename = function (type) {
		if (-1 === type.filename.indexOf("[N]")) {
			return type.filename;
		} else {
			var nextIndex = 1;
			if (!this.fileNameIndexes[type.contentType]) {
				this.fileNameIndexes[type.contentType] = nextIndex + 1;
			} else {
				nextIndex = this.fileNameIndexes[type.contentType]++;
			}
			return type.filename.replace(/\[N\]/g, nextIndex.toString());
		}
	};
	openXml.OpenXmlPackage.prototype.generateUriByType = function (type) {
		//todo
		return '/' + type.dir + '/' + this.generateNextFilename(type);
	};
	openXml.OpenXmlPackage.prototype.getRelativeUri  = function (from, to) {
		var fromParts = from.split('/').filter(function(e){return e;});
		var toParts = to.split('/').filter(function(e){return e;});
		var length = Math.min(fromParts.length, toParts.length);
		var samePartsLength = length;
		for (var i = 0; i < length; i++) {
			if (fromParts[i] !== toParts[i]) {
				samePartsLength = i;
				break;
			}
		}
		var outputParts = [];
		for (var i = samePartsLength; i < fromParts.length - 1; i++) {
			outputParts.push('..');
		}
		outputParts = outputParts.concat(toParts.slice(samePartsLength));
		return outputParts.join('/');
	};
	openXml.OpenXmlPackage.prototype.addPartWithoutRels = function (uri, contentType, data) {
		//add part
		var newPart = new openXml.OpenXmlPart(this, uri, contentType);
		this.parts[uri] = newPart;
		//zip
		this.zip.addFile(newPart.getUriRelative(), data);
		// update [Content_Types].xml
		var changed = this.cntTypes.add(uri, contentType);
		if(changed) {
			this.zip.removeFile("[Content_Types].xml");
			this.zip.addFile("[Content_Types].xml", this.cntTypes.toXml(this.xmlWriter));
		}
		return newPart;
	}
	openXml.OpenXmlPackage.prototype.addPart = function (type, data) {
		return this.getRootPart().addPart(type, data);
	}
	openXml.OpenXmlPackage.prototype.addRelationship = function (relationshipType, target, targetMode) {
		return this.getRootPart().addRelationship(relationshipType, target, targetMode);
	}

	openXml.OpenXmlPackage.prototype.getParts = function() {
		var parts = [];
		for (var part in this.parts) {
			if (this.parts[part].contentType !== openXml.Types.relationships.contentType && part !== "[Content_Types].xml") {
				parts.push(this.parts[part]);
			}
		}
		return parts;
	}

	openXml.OpenXmlPackage.prototype.getRootPart = function() {
		return new openXml.OpenXmlPart(this, "/", openXml.Types.relationships.contentType);
	}
	openXml.OpenXmlPackage.prototype.getRels = function() {
		return this.getRootPart().getRels();
	}
	openXml.OpenXmlPackage.prototype.getRelationships = function() {
		return this.getRootPart().getRelationships();
	}

	openXml.OpenXmlPackage.prototype.getRelationship = function(rId) {
		return this.getRootPart().getRelationship(rId);
	}

	openXml.OpenXmlPackage.prototype.getRelationshipsByRelationshipType = function(relationshipType) {
		return this.getRootPart().getRelationshipsByRelationshipType(relationshipType);
	}

	openXml.OpenXmlPackage.prototype.getPartsByRelationshipType = function(relationshipType) {
		return this.getRootPart().getPartsByRelationshipType(relationshipType);
	}

	openXml.OpenXmlPackage.prototype.getPartByRelationshipType = function(relationshipType) {
		return this.getRootPart().getPartByRelationshipType(relationshipType);
	}

	openXml.OpenXmlPackage.prototype.getRelationshipsByContentType = function(contentType) {
		return this.getRootPart().getRelationshipsByContentType(contentType);
	}

	openXml.OpenXmlPackage.prototype.getPartsByContentType = function(contentType) {
		return this.getRootPart().getPartsByContentType(contentType);
	};

	openXml.OpenXmlPackage.prototype.getRelationshipById = function(rId) {
		return this.getRootPart().getRelationshipById(contentType);
	}

	openXml.OpenXmlPackage.prototype.getPartById = function(rId) {
		return this.getRootPart().getPartById(rId);
	}

	openXml.OpenXmlPackage.prototype.getPartByUri = function(uri) {
		var part = this.parts[uri];
		return part;
	}

	openXml.OpenXmlPackage.prototype.getContentType = function(uri) {
		var ct = this.cntTypes.Overrides[uri];
		if (!ct) {
			var exti = uri.lastIndexOf(".");
			var ext = uri.substring(exti + 1);
			ct = this.cntTypes.Defaults[ext];
		}
		return ct;
	};

	/*********** OpenXmlPart ***********/

	openXml.OpenXmlPart = function(pkg, uri, contentType) {
		this.pkg = pkg;      // reference to the parent package
		this.uri = uri;      // the part is also indexed by uri in the package
		this.contentType = contentType;
	};

	openXml.OpenXmlPart.prototype.getUriRelative = function() {
		return this.uri.substring(1);
	};
	openXml.OpenXmlPart.prototype.getDocumentContent = function(type) {
		type = type || "string";
		var data = this.pkg.zip.getFile(this.getUriRelative());
		if (!data) {
			data = new Uint8Array(0);
		}
		if ("string" === type) {
			return AscCommon.UTF8ArrayToString(data, 0, data.length);
		} else {
			return data;
		}
	};
	openXml.OpenXmlPart.prototype.addPart = function (type, data) {
		var uri = this.pkg.generateUriByType(type);
		var newPart = this.pkg.addPartWithoutRels(uri, type.contentType, data);
		//update rels
		var target = this.pkg.getRelativeUri(this.uri, uri);
		this.addRelationship(type.relationType, target);
		return newPart;
	}
	openXml.OpenXmlPart.prototype.addRelationship = function (relationshipType, target, targetMode) {
		var relsFilename = getRelsPartUriOfPart(this);
		var rels = this.getRels();
		var rId = rels.getNextRId();
		var newRel = new openXml.OpenXmlRelationship(rels.pkg, rels.part, rId, relationshipType, target, targetMode);
		rels.rels.push(newRel);
		this.pkg.removePart(relsFilename);
		this.pkg.addPartWithoutRels(relsFilename, null, rels.toXml(this.pkg.xmlWriter));
		return rId;
	}

	function getRelsPartUriOfPart(part) {
		var uri = part.uri;
		var lastSlash = uri.lastIndexOf('/');
		var partFileName = uri.substring(lastSlash + 1);
		var relsFileName = uri.substring(0, lastSlash) + "/_rels/" + partFileName + ".rels";
		return relsFileName;
	}

	function getPartUriOfRelsPart(part) {
		var uri = part.uri;
		var lastSlash = uri.lastIndexOf('/');
		var partFileName = uri.substring(lastSlash + 1, uri.length - '.rels'.length);
		var relsFileName = uri.substring(0, uri.lastIndexOf('/', lastSlash - 1) + 1) + partFileName;
		return relsFileName;
	}

	function getRelsPartOfPart(part) {
		var relsFileName = getRelsPartUriOfPart(part);
		var relsPart = part.pkg.getPartByUri(relsFileName);
		return relsPart;
	}

	openXml.OpenXmlPart.prototype.getRels = function() {
		var relsPackage = new Rels(null, this);
		var relsPart = getRelsPartOfPart(this);
		if(relsPart) {
			new SaxParserBase().parse(relsPart.getDocumentContent(), relsPackage);
		}
		return relsPackage;
	}
	openXml.OpenXmlPart.prototype.getRelationships = function() {
		return this.getRels().rels;
	}

	openXml.OpenXmlPart.prototype.getRelationship = function(rId) {
		var rels = this.getRelationships();
		for (var i = 0; i < rels.length; ++i) {
			var rel = rels[i];
			if (rel.relationshipId == rId) {
				return rel;
			}
		}
		return null;
	}

	// returns all related parts of the source part
	openXml.OpenXmlPart.prototype.getParts = function() {
		var parts = [];
		var rels = this.getRelationships();
		for (var i = 0; i < rels.length; ++i) {
			var part = this.pkg.getPartByUri(rels[i].targetFullName);
			parts.push(part);
		}
		return parts;
	}

	openXml.OpenXmlPart.prototype.getRelationshipsByRelationshipType = function(relationshipType) {
		var rels = this.getRelationships();
		return rels.filter(function (rel) {
			return rel.relationshipType === relationshipType;
		});
	}

	// returns all related parts of the source part with the given relationship type
	openXml.OpenXmlPart.prototype.getPartsByRelationshipType = function(relationshipType) {
		var parts = [];
		var rels = this.getRelationshipsByRelationshipType(relationshipType);
		for (var i = 0; i < rels.length; ++i) {
			var part = this.pkg.getPartByUri(rels[i].targetFullName);
			parts.push(part);
		}
		return parts;
	}

	openXml.OpenXmlPart.prototype.getPartByRelationshipType = function(relationshipType) {
		var parts = this.getPartsByRelationshipType(relationshipType);
		if (parts.length < 1) {
			return null;
		}
		return parts[0];
	}

	openXml.OpenXmlPart.prototype.getRelationshipsByContentType = function(contentType) {
		var rels = this.getRelationships();
		return rels.filter(function (rel) {
			return this.getContentType(rel.targetFullName) === contentType;
		});
	}

	openXml.OpenXmlPart.prototype.getPartsByContentType = function(contentType) {
		var parts = [];
		var rels = this.getRelationshipsByContentType(contentType);
		for (var i = 0; i < rels.length; ++i) {
			var part = this.pkg.getPartByUri(rels[i].targetFullName);
			parts.push(part);
		}
		return parts;
	}

	openXml.OpenXmlPart.prototype.getRelationshipById = function(relationshipId) {
		return this.getRelationship(relationshipId);
	}

	openXml.OpenXmlPart.prototype.getPartById = function(relationshipId) {
		var rel = this.getRelationshipById(relationshipId);
		if (rel) {
			var part = this.pkg.getPartByUri(rel.targetFullName);
			return part;
		}
		return null;
	}

	/******************************** OpenXmlRelationship ********************************/

	openXml.OpenXmlRelationship = function(pkg, part, relationshipId, relationshipType, target, targetMode) {
		this.fromPkg = pkg;        // if from a part, this will be null
		this.fromPart = part;      // if from a package, this will be null;
		this.relationshipId = relationshipId;
		this.relationshipType = relationshipType;
		this.target = target;
		this.targetMode = targetMode;
		if (!targetMode) {
			this.targetMode = "Internal";
		}

		var workingTarget = target;
		var workingCurrentPath;
		if (this.fromPkg) {
			workingCurrentPath = "/";
		}
		if (this.fromPart) {
			var slashIndex = this.fromPart.uri.lastIndexOf('/');
			if (slashIndex === -1) {
				workingCurrentPath = "/";
			} else {
				workingCurrentPath = this.fromPart.uri.substring(0, slashIndex) + "/";
			}
		}
		if (targetMode === "External") {
			this.targetFullName = this.target;
			return;
		}
		while (workingTarget.startsWith('../')) {
			if (workingCurrentPath.endsWith('/')) {
				workingCurrentPath = workingCurrentPath.substring(0, workingCurrentPath.length - 1);
			}
			var indexOfLastSlash = workingCurrentPath.lastIndexOf('/');
			if (indexOfLastSlash === -1) {
				throw "internal error when processing relationships";
			}
			workingCurrentPath = workingCurrentPath.substring(0, indexOfLastSlash + 1);
			workingTarget = workingTarget.substring(3);
		}

		this.targetFullName = workingCurrentPath + workingTarget;
	}
	openXml.OpenXmlRelationship.prototype.toXml = function(writer, name) {
		writer.WriteXmlNodeStart(name);
		if (this.relationshipId) {
			writer.WriteXmlAttributeStringEncode("Id", this.relationshipId);
		}
		if (this.relationshipType) {
			writer.WriteXmlAttributeString("Type", this.relationshipType);
		}
		if (this.target) {
			writer.WriteXmlAttributeStringEncode("Target", this.target);
		}
		if (this.targetMode) {
			writer.WriteXmlAttributeString("TargetMode", this.targetMode);
		}
		writer.WriteXmlNodeEnd(name, true, true);
	};

	/******************************** OpenXmlRelationship ********************************/
	openXml.Types = {
		calculationChain: {dir: "xl", filename: "calcChain.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/calcChain"},
		cellMetadata: {dir: "", filename: "cellMetadata.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata"},
		chart: {dir: "", filename: "chart.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.chart+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart"},
		chartColorStyle: {dir: "", filename: "chartColorStyle.xml", contentType: "application/vnd.ms-office.chartcolorstyle+xml", relationType: "http://schemas.microsoft.com/office/2011/relationships/chartColorStyle"},
		chartDrawing: {dir: "", filename: "chartDrawing.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartUserShapes"},
		chartsheet: {dir: "xl/chartsheets", filename: "sheet[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"},
		chartStyle: {dir: "", filename: "chartStyle.xml", contentType: "application/vnd.ms-office.chartstyle+xml", relationType: "http://schemas.microsoft.com/office/2011/relationships/chartStyle"},
		commentAuthors: {dir: "", filename: "commentAuthors.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/commentAuthors"},
		connections: {dir: "xl", filename: "connections.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections"},
		coreFileProperties: {dir: "docProps", filename: "core.xml", contentType: "application/vnd.openxmlformats-package.core-properties+xml", relationType: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"},
		customFileProperties: {dir: "docProps", filename: "custom.xml", contentType: "application/vnd.openxmlformats-officedocument.custom-properties+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"},
		customization: {dir: "", filename: "customization.xml", contentType: "application/vnd.ms-word.keyMapCustomizations+xml", relationType: "http://schemas.microsoft.com/office/2006/relationships/keyMapCustomizations"},
		customProperty: {dir: "", filename: "customProperty.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customProperty"},
		customXmlProperties: {dir: "", filename: "customXmlProperties.xml", contentType: "application/vnd.openxmlformats-officedocument.customXmlProperties+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps"},
		diagramColors: {dir: "", filename: "diagramColors.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramColors"},
		diagramData: {dir: "", filename: "diagramData.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramData"},
		diagramLayoutDefinition: {dir: "", filename: "diagramLayoutDefinition.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramLayout"},
		diagramPersistLayout: {dir: "", filename: "diagramPersistLayout.xml", contentType: "application/vnd.ms-office.drawingml.diagramDrawing+xml", relationType: "http://schemas.microsoft.com/office/2007/relationships/diagramDrawing"},
		diagramStyle: {dir: "", filename: "diagramStyle.xml", contentType: "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/diagramQuickStyle"},
		dialogsheet: {dir: "", filename: "dialogsheet.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet"},
		digitalSignatureOrigin: {dir: "", filename: "digitalSignatureOrigin.xml", contentType: "application/vnd.openxmlformats-package.digital-signature-origin", relationType: "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/origin"},
		documentSettings: {dir: "word", filename: "settings.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings"},
		drawings: {dir: "xl/drawings", filename: "drawing[N].xml", contentType: "application/vnd.openxmlformats-officedocument.drawing+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"},
		endnotes: {dir: "", filename: "endnotes.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes"},
		excelAttachedToolbars: {dir: "", filename: "excelAttachedToolbars.xml", contentType: "application/vnd.ms-excel.attachedToolbars", relationType: "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars"},
		extendedFileProperties: {dir: "docProps", filename: "app.xml", contentType: "application/vnd.openxmlformats-officedocument.extended-properties+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"},
		externalWorkbook: {dir: "xl/externalLinks", filename: "externalLink[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink"},
		fontData: {dir: "", filename: "fontData.xml", contentType: "application/x-fontdata"},
		fontTable: {dir: "word", filename: "fontTable.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable"},
		footer: {dir: "", filename: "footer.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer"},
		footnotes: {dir: "", filename: "footnotes.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes"},
		gif: {dir: "", filename: "gif.xml", contentType: "image/gif"},
		glossaryDocument: {dir: "", filename: "glossaryDocument.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/glossaryDocument"},
		handoutMaster: {dir: "", filename: "handoutMaster.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/handoutMaster"},
		header: {dir: "", filename: "header.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header"},
		jpeg: {dir: "", filename: "jpeg.xml", contentType: "image/jpeg"},
		mainDocument: {dir: "word", filename: "document.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"},
		notesMaster: {dir: "", filename: "notesMaster.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"},
		notesSlide: {dir: "", filename: "notesSlide.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide"},
		numberingDefinitions: {dir: "", filename: "numberingDefinitions.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering"},
		pict: {dir: "", filename: "pict.xml", contentType: "image/pict"},
		pivotTable: {dir: "xl/pivotTables", filename: "pivotTable[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotTable"},
		pivotTableCacheDefinition: {dir: "xl/pivotCache", filename: "pivotCacheDefinition[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheDefinition"},
		pivotTableCacheRecords: {dir: "xl/pivotCache", filename: "pivotCacheRecords[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/pivotCacheRecords"},
		png: {dir: "", filename: "png.xml", contentType: "image/png"},
		presentation: {dir: "", filename: "presentation.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"},
		presentationProperties: {dir: "", filename: "presentationProperties.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.presProps+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps"},
		presentationTemplate: {dir: "", filename: "presentationTemplate.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml"},
		queryTable: {dir: "xl/queryTables", filename: "queryTable[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/queryTable"},
		relationships: {dir: "_rels", filename: ".rels", contentType: "application/vnd.openxmlformats-package.relationships+xml"},
		ribbonAndBackstageCustomizations: {dir: "", filename: "ribbonAndBackstageCustomizations.xml", contentType: "http://schemas.microsoft.com/office/2009/07/customui", relationType: "http://schemas.microsoft.com/office/2007/relationships/ui/extensibility"},
		sharedStringTable: {dir: "xl", filename: "sharedStrings.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"},
		singleCellTable: {dir: "", filename: "singleCellTable.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableSingleCells"},
		slicerCache: {dir: "xl/slicerCaches", filename: "slicerCache[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.slicerCache+xml"},
		slicers: {dir: "xl/slicers", filename: "slicer[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.slicer+xml"},
		slide: {dir: "", filename: "slide.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.slide+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide"},
		slideComments: {dir: "", filename: "slideComments.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.comments+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"},
		slideLayout: {dir: "", filename: "slideLayout.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout"},
		slideMaster: {dir: "", filename: "slideMaster.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster"},
		slideShow: {dir: "", filename: "slideShow.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml"},
		slideSyncData: {dir: "", filename: "slideSyncData.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideUpdateInfo"},
		styles: {dir: "word", filename: "styles.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"},
		tableDefinition: {dir: "xl/tables", filename: "table[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/table"},
		tableStyles: {dir: "", filename: "tableStyles.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles"},
		theme: {dir: "word/theme", filename: "theme[N].xml", contentType: "application/vnd.openxmlformats-officedocument.theme+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"},
		themeOverride: {dir: "", filename: "themeOverride.xml", contentType: "application/vnd.openxmlformats-officedocument.themeOverride+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/themeOverride"},
		tiff: {dir: "", filename: "tiff.xml", contentType: "image/tiff"},
		trueTypeFont: {dir: "", filename: "trueTypeFont.xml", contentType: "application/x-font-ttf"},
		userDefinedTags: {dir: "", filename: "userDefinedTags.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.tags+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/tags"},
		viewProperties: {dir: "", filename: "viewProperties.xml", contentType: "application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps"},
		vmlDrawing: {dir: "", filename: "vmlDrawing.xml", contentType: "application/vnd.openxmlformats-officedocument.vmlDrawing", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing"},
		volatileDependencies: {dir: "", filename: "volatileDependencies.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/volatileDependencies"},
		webSettings: {dir: "word", filename: "webSettings.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings"},
		wordAttachedToolbars: {dir: "", filename: "wordAttachedToolbars.xml", contentType: "application/vnd.ms-word.attachedToolbars", relationType: "http://schemas.microsoft.com/office/2006/relationships/attachedToolbars"},
		wordprocessingComments: {dir: "", filename: "wordprocessingComments.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"},
		wordprocessingTemplate: {dir: "", filename: "wordprocessingTemplate.xml", contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml"},
		workbook: {dir: "xl", filename: "workbook.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"},
		workbookRevisionHeader: {dir: "", filename: "workbookRevisionHeader.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionHeaders"},
		workbookRevisionLog: {dir: "", filename: "workbookRevisionLog.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/revisionLog"},
		workbookStyles: {dir: "xl", filename: "styles.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"},
		workbookTemplate: {dir: "", filename: "workbookTemplate.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},
		workbookUserData: {dir: "", filename: "workbookUserData.xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/usernames"},
		worksheet: {dir: "xl/worksheets", filename: "sheet[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"},
		worksheetComments: {dir: "xl", filename: "comments[N].xml", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"},
		worksheetSortMap: {dir: "", filename: "worksheetSortMap.xml", contentType: "application/vnd.ms-excel.wsSortMap+xml", relationType: "http://schemas.microsoft.com/office/2006/relationships/wsSortMap"},
		xmlSignature: {dir: "", filename: "xmlSignature.xml", contentType: "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml", relationType: "http://schemas.openxmlformats.org/package/2006/relationships/digital-signature/signature"},

		threadedComment: {dir: "xl/threadedComments", filename: "threadedComment[N].xml", contentType: "application/vnd.ms-excel.threadedcomments+xml", relationType: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment"},
		person: {dir: "xl/persons", filename: "person.xml", contentType: "application/vnd.ms-excel.person+xml", relationType: "http://schemas.microsoft.com/office/2017/10/relationships/person"},
		ctrlProp: {dir: "xl/ctrlProps", filename: "ctrlProp[N].xml", contentType: "application/vnd.ms-excel.controlproperties+xml", relationType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/ctrlProp"},
		slicer: {dir: "xl/namedSheetViews", filename: "namedSheetView[N].xml", contentType: "application/vnd.ms-excel.namedsheetviews+xml", relationType: "http://schemas.microsoft.com/office/2019/04/relationships/namedSheetView"},
		workbookComment: {dir: "xl", filename: "workbookComments.bin", contentType: "", relationType: "http://schemas.onlyoffice.com/workbookComments"},
	}

	window.openXml = openXml;
	//----------------------------------------------------------export----------------------------------------------------
	window['AscCommon'] = window['AscCommon'] || {};
	window['AscCommon'].openXml = openXml;

}(window));
