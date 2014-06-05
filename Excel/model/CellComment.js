﻿"use strict";

/* CellComment.js
*
* Author: Dmitry Vikulov
* Date:   06/02/2013
*/

//-----------------------------------------------------------------------------------
// CommentCoords
//-----------------------------------------------------------------------------------

//{ ASC Classes
/** @constructor */
function asc_CCommentCoords(obj) {

	this.nRow = null;
	this.nCol = null;

	this.nLeft = null;
	this.nLeftOffset = null;
	this.nTop = null;
	this.nTopOffset = null;
	this.nRight = null;
	this.nRightOffset = null;
	this.nBottom = null;
	this.nBottomOffset = null;

	this.dLeftMM = null;
	this.dTopMM = null;
	this.dLeftPX = null;
	this.dReverseLeftPX = null;
	this.dTopPX = null;

	this.dWidthMM = null;
	this.dHeightMM = null;
	this.dWidthPX = null;
	this.dHeightPX = null;

	this.bMoveWithCells = false;
	this.bSizeWithCells = false;

	if (obj) {
		this.nRow = obj.nRow;
		this.nCol = obj.nCol;

		this.nLeft = obj.nLeft;
		this.nLeftOffset = obj.nLeftOffset;
		this.nTop = obj.nTop;
		this.nTopOffset = obj.nTopOffset;
		this.nRight = obj.nRight;
		this.nRightOffset = obj.nRightOffset;
		this.nBottom = obj.nBottom;
		this.nBottomOffset = obj.nBottomOffset;

		this.dLeftMM = obj.dLeftMM;
		this.dTopMM = obj.dTopMM;
		this.dLeftPX = obj.dLeftPX;
		this.dReverseLeftPX = obj.dReverseLeftPX;
		this.dTopPX = obj.dTopPX;

		this.dWidthMM = obj.dWidthMM;
		this.dHeightMM = obj.dHeightMM;
		this.dWidthPX = obj.dWidthPX;
		this.dHeightPX = obj.dHeightPX;

		this.bMoveWithCells = obj.bMoveWithCells;
		this.bSizeWithCells = obj.bSizeWithCells;
	}
}

// Prototype
asc_CCommentCoords.prototype = {

	asc_setRow: function(val) { this.nRow = val; },
	asc_getRow: function() { return this.nRow; },

	asc_setCol: function(val) { this.nCol = val; },
	asc_getCol: function() { return this.nCol; },

	asc_setLeft: function(val) { this.nLeft = val; },
	asc_getLeft: function() { return this.nLeft; },

	asc_setLeftOffset: function(val) { this.nLeftOffset = val; },
	asc_getLeftOffset: function() { return this.nLeftOffset; },

	asc_setTop: function(val) { this.nTop = val; },
	asc_getTop: function() { return this.nTop; },

	asc_setTopOffset: function(val) { this.nTopOffset = val; },
	asc_getTopOffset: function() { return this.nTopOffset; },

	asc_setRight: function(val) { this.nRight = val; },
	asc_getRight: function() { return this.nRight; },

	asc_setRightOffset: function(val) { this.nRightOffset = val; },
	asc_getRightOffset: function() { return this.nRightOffset; },

	asc_setBottom: function(val) { this.nBottom = val; },
	asc_getBottom: function() { return this.nBottom; },

	asc_setBottomOffset: function(val) { this.nBottomOffset = val; },
	asc_getBottomOffset: function() { return this.nBottomOffset; },

	asc_setLeftMM: function(val) { this.dLeftMM = val; },
	asc_getLeftMM: function() { return this.dLeftMM; },

	asc_setLeftPX: function(val) { this.dLeftPX = val; },
	asc_getLeftPX: function() { return this.dLeftPX; },
	
	asc_setReverseLeftPX: function(val) { this.dReverseLeftPX = val; },
	asc_getReverseLeftPX: function() { return this.dReverseLeftPX; },

	asc_setTopMM: function(val) { this.dTopMM = val; },
	asc_getTopMM: function() { return this.dTopMM; },

	asc_setTopPX: function(val) { this.dTopPX = val; },
	asc_getTopPX: function() { return this.dTopPX; },

	asc_setWidthMM: function(val) { this.dWidthMM = val; },
	asc_getWidthMM: function() { return this.dWidthMM; },

	asc_setHeightMM: function(val) { this.dHeightMM = val; },
	asc_getHeightMM: function() { return this.dHeightMM; },

	asc_setWidthPX: function(val) { this.dWidthPX = val; },
	asc_getWidthPX: function() { return this.dWidthPX; },

	asc_setHeightPX: function(val) { this.dHeightPX = val; },
	asc_getHeightPX: function() { return this.dHeightPX; },

	asc_setMoveWithCells: function(val) { this.bMoveWithCells = val; },
	asc_getMoveWithCells: function() { return this.bMoveWithCells; },

	asc_setSizeWithCells: function(val) { this.bSizeWithCells = val; },
	asc_getSizeWithCells: function() { return this.bSizeWithCells; }
};

window["Asc"]["asc_CCommentCoords"] = window["Asc"].asc_CCommentCoords = asc_CCommentCoords;
var prot = asc_CCommentCoords.prototype;

prot["asc_setRow"] = prot.asc_setRow;
prot["asc_getRow"] = prot.asc_getRow;

prot["asc_setCol"] = prot.asc_setCol;
prot["asc_setCol"] = prot.asc_setCol;

prot["asc_setLeft"] = prot.asc_setLeft;
prot["asc_getLeft"] = prot.asc_getLeft;

prot["asc_setLeftOffset"] = prot.asc_setLeftOffset;
prot["asc_getLeftOffset"] = prot.asc_getLeftOffset;

prot["asc_setTop"] = prot.asc_setTop;
prot["asc_getTop"] = prot.asc_getTop;

prot["asc_setTopOffset"] = prot.asc_setTopOffset;
prot["asc_getTopOffset"] = prot.asc_getTopOffset;

prot["asc_setRight"] = prot.asc_setRight;
prot["asc_getRight"] = prot.asc_getRight;

prot["asc_setRightOffset"] = prot.asc_setRightOffset;
prot["asc_getRightOffset"] = prot.asc_getRightOffset;

prot["asc_setBottom"] = prot.asc_setBottom;
prot["asc_getBottom"] = prot.asc_getBottom;

prot["asc_setBottomOffset"] = prot.asc_setBottomOffset;
prot["asc_getBottomOffset"] = prot.asc_getBottomOffset;

prot["asc_setLeftMM"] = prot.asc_setLeftMM;
prot["asc_getLeftMM"] = prot.asc_getLeftMM;

prot["asc_setLeftPX"] = prot.asc_setLeftPX;
prot["asc_getLeftPX"] = prot.asc_getLeftPX;

prot["asc_setTopMM"] = prot.asc_setTopMM;
prot["asc_getTopMM"] = prot.asc_getTopMM;

prot["asc_setTopPX"] = prot.asc_setTopPX;
prot["asc_getTopPX"] = prot.asc_getTopPX;

prot["asc_setWidthMM"] = prot.asc_setWidthMM;
prot["asc_getWidthMM"] = prot.asc_getWidthMM;

prot["asc_setHeightMM"] = prot.asc_setHeightMM;
prot["asc_getHeightMM"] = prot.asc_getHeightMM;

prot["asc_setWidthPX"] = prot.asc_setWidthPX;
prot["asc_getWidthPX"] = prot.asc_getWidthPX;

prot["asc_setHeightPX"] = prot.asc_setHeightPX;
prot["asc_getHeightPX"] = prot.asc_getHeightPX;

prot["asc_setMoveWithCells"] = prot.asc_setMoveWithCells;
prot["asc_getMoveWithCells"] = prot.asc_getMoveWithCells;

prot["asc_setSizeWithCells"] = prot.asc_setSizeWithCells;
prot["asc_getSizeWithCells"] = prot.asc_getSizeWithCells;

//-----------------------------------------------------------------------------------
// CommentData
//-----------------------------------------------------------------------------------
/** @constructor */
function asc_CCommentData(obj) {
	this.Properties = {
		wsId: 0,
		nCol: 1,
		nRow: 2,
		nId: 3,
		nLevel: 5,
		sText: 6,
		sQuoteText: 7,
		sTime: 8,
		sUserId: 9,
		sUserName: 10,
		bDocument: 11,
		bSolved: 12,
		aReplies: 13,
		bHidden: 14
	};

	this.bHidden = false;
	this.wsId = null;
	this.nCol = 0;
	this.nRow = 0;
	this.nId = null;
	this.oParent = null;
	this.nLevel = 0;

	// Common
	this.sText = "";
	this.sQuoteText = "";
	this.sTime = "";
	this.sUserId = "";
	this.sUserName = "";
	this.bDocument = true; 	// For compatibility with 'Word Comment Control'
	this.bSolved = false;
	this.aReplies = [];

	if (obj) {
		this.bHidden = obj.bHidden;
		this.wsId = obj.wsId;
		this.nCol = obj.nCol;
		this.nRow = obj.nRow;
		this.nId = obj.nId;
		this.oParent = obj.oParent;
		this.nLevel = (null === this.oParent) ? 0 : this.oParent.asc_getLevel() + 1;

		// Common
		this.sText = obj.sText;
		this.sQuoteText = obj.sQuoteText;
		this.sTime = obj.sTime;
		this.sUserId = obj.sUserId;
		this.sUserName = obj.sUserName;
		this.bDocument = obj.bDocument;
		this.bSolved = obj.bSolved;
		this.aReplies = [];

		for (var i = 0; i < obj.aReplies.length; i++) {
			var item = new asc_CCommentData(obj.aReplies[i]);
			this.aReplies.push(item);
		}
	}
}

// Prototype
asc_CCommentData.prototype = {
	guid: function () {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	},
	setId: function () {
		if (this.bDocument)
			this.nId = "doc_" + this.guid();
		else
			this.nId = "sheet" + this.wsId + "_" + this.guid();
	},

	asc_putQuoteText: function(val) { this.sQuoteText = val; },
	asc_getQuoteText: function() { return this.sQuoteText; },

	asc_putRow: function(val) { this.nRow = val; },
	asc_getRow: function() { return this.nRow; },

	asc_putCol: function(val) { this.nCol = val; },
	asc_getCol: function() { return this.nCol; },

	asc_putId: function(val) { this.nId = val; },
	asc_getId: function() { return this.nId; },

	asc_putLevel: function(val) { this.nLevel = val; },
	asc_getLevel: function() { return this.nLevel; },

	asc_putParent: function(obj) { this.oParent = obj; },
	asc_getParent: function() { return this.oParent; },

	asc_putText: function(val) { this.sText = val; },
	asc_getText: function() { return this.sText; },

	asc_putTime: function(val) { this.sTime = val; },
	asc_getTime: function() { return this.sTime; },

	asc_putUserId: function(val) { this.sUserId = val; },
	asc_getUserId: function() { return this.sUserId; },

	asc_putUserName: function(val) { this.sUserName = val; },
	asc_getUserName: function() { return this.sUserName; },

	asc_putDocumentFlag: function(val) { this.bDocument = val; },
	asc_getDocumentFlag: function() { return this.bDocument; },
	
	asc_putHiddenFlag: function(val) { this.bHidden = val; },
	asc_getHiddenFlag: function() { return this.bHidden; },

	asc_putSolved: function(val) { this.bSolved = val; },
	asc_getSolved: function() { return this.bSolved; },

	asc_getRepliesCount: function() { return this.aReplies.length; },
	asc_getReply: function(index) { return this.aReplies[index]; },

	asc_addReply: function(oReply) {

		oReply.asc_putParent(this);
		oReply.asc_putDocumentFlag(this.asc_getDocumentFlag());
		oReply.asc_putLevel((oReply.oParent == null) ? 0 : oReply.oParent.asc_getLevel() + 1);
		oReply.wsId = (oReply.oParent == null) ? -1 : oReply.oParent.wsId;
		oReply.setId();
		oReply.asc_putCol(this.nCol);
		oReply.asc_putRow(this.nRow);
		this.aReplies.push(oReply);

		return oReply;
	},

	asc_getMasterCommentId: function () {
		return this.wsId;
	},

	//	For collaborative editing
	getType: function() {
		return UndoRedoDataTypes.CommentData;
	},

	getProperties: function() {
		return this.Properties;
	},

	getProperty: function(nType) {
		switch (nType) {
			case this.Properties.wsId: return this.wsId; break;
			case this.Properties.nCol: return this.nCol; break;
			case this.Properties.nRow: return this.nRow; break;
			case this.Properties.nId: return this.nId; break;
			case this.Properties.nLevel: return this.nLevel; break;
			case this.Properties.sText: return this.sText; break;
			case this.Properties.sQuoteText: return this.sQuoteText; break;
			case this.Properties.sTime: return this.sTime; break;
			case this.Properties.sUserId: return this.sUserId; break;
			case this.Properties.sUserName: return this.sUserName; break;
			case this.Properties.bDocument: return this.bDocument; break;
			case this.Properties.bSolved: return this.bSolved; break;
			case this.Properties.aReplies: return this.aReplies; break;
			case this.Properties.bHidden: return this.bHidden; break;
		}
		return null;
	},

	setProperty: function(nType, value) {
		switch (nType) {
			case this.Properties.wsId: this.wsId = value; break;
			case this.Properties.nCol: this.nCol = value; break;
			case this.Properties.nRow: this.nRow = value; break;
			case this.Properties.nId: this.nId = value; break;
			case this.Properties.nLevel: this.nLevel = value; break;
			case this.Properties.sText: this.sText = value; break;
			case this.Properties.sQuoteText: this.sQuoteText = value; break;
			case this.Properties.sTime: this.sTime = value; break;
			case this.Properties.sUserId: this.sUserId = value; break;
			case this.Properties.sUserName: this.sUserName = value; break;
			case this.Properties.bDocument: this.bDocument = value; break;
			case this.Properties.bSolved: this.bSolved = value; break;
			case this.Properties.aReplies: this.aReplies = value; break;
			case this.Properties.bHidden: this.bHidden = value; break;
		}
	},
	
	applyCollaborative: function (nSheetId, collaborativeEditing) {
		if ( !this.bDocument ) {
			this.nCol = collaborativeEditing.getLockMeColumn2(nSheetId, this.nCol);
			this.nRow = collaborativeEditing.getLockMeRow2(nSheetId, this.nRow);
		}
	}
};

window["Asc"]["asc_CCommentData"] = window["Asc"].asc_CCommentData = asc_CCommentData;
prot = asc_CCommentData.prototype;

prot["asc_putRow"] = prot.asc_putRow;
prot["asc_getRow"] = prot.asc_getRow;

prot["asc_putCol"] = prot.asc_putCol;
prot["asc_getCol"] = prot.asc_getCol;

prot["asc_putId"] = prot.asc_putId;
prot["asc_getId"] = prot.asc_getId;

prot["asc_putLevel"] = prot.asc_putLevel;
prot["asc_getLevel"] = prot.asc_getLevel;

prot["asc_putParent"] = prot.asc_putParent;
prot["asc_getParent"] = prot.asc_getParent;

prot["asc_putText"] = prot.asc_putText;
prot["asc_getText"] = prot.asc_getText;

prot["asc_putQuoteText"] = prot.asc_putQuoteText;
prot["asc_getQuoteText"] = prot.asc_getQuoteText;

prot["asc_putTime"] = prot.asc_putTime;
prot["asc_getTime"] = prot.asc_getTime;

prot["asc_putUserId"] = prot.asc_putUserId;
prot["asc_getUserId"] = prot.asc_getUserId;

prot["asc_putUserName"] = prot.asc_putUserName;
prot["asc_getUserName"] = prot.asc_getUserName;

prot["asc_putDocumentFlag"] = prot.asc_putDocumentFlag;
prot["asc_getDocumentFlag"] = prot.asc_getDocumentFlag;

prot["asc_putHiddenFlag"] = prot.asc_putHiddenFlag;
prot["asc_getHiddenFlag"] = prot.asc_getHiddenFlag;

prot["asc_putSolved"] = prot.asc_putSolved;
prot["asc_getSolved"] = prot.asc_getSolved;

prot["asc_getRepliesCount"] = prot.asc_getRepliesCount;
prot["asc_getReply"] = prot.asc_getReply;

prot["asc_addReply"] = prot.asc_addReply;

prot["asc_getMasterCommentId"] = prot.asc_getMasterCommentId;

//}

//-----------------------------------------------------------------------------------
// CompositeCommentData
//-----------------------------------------------------------------------------------

function CompositeCommentData() {
	this.commentBefore = null;
	this.commentAfter = null;

	this.Properties = {
		commentBefore: 0,
		commentAfter: 1
	};
}

CompositeCommentData.prototype = {
	//	For collaborative editing
	getType: function() {
		return UndoRedoDataTypes.CompositeCommentData;
	},

	getProperties: function() {
		return this.Properties;
	},

	getProperty: function(nType) {
		switch (nType) {
			case this.Properties.commentBefore: return this.commentBefore; break;
			case this.Properties.commentAfter: return this.commentAfter; break;
		}
		return null;
	},

	setProperty: function(nType, value) {
		switch (nType) {
			case this.Properties.commentBefore: this.commentBefore = value; break;
			case this.Properties.commentAfter: this.commentAfter = value; break;
		}
	}
};

//-----------------------------------------------------------------------------------
// CellCommentator
//-----------------------------------------------------------------------------------
/** @constructor */
function CCellCommentator(currentSheet) {
	this.worksheet = currentSheet;
	this.overlayCtx = currentSheet.overlayCtx;
	this.drawingCtx = currentSheet.drawingCtx;

	// Drawing settings
	this.bShow = true;
	this.commentIconColor = new CColor(255, 144, 0);
	this.commentFillColor = new CColor(255, 255, 0);
	this.commentPadding = 4; 	// px
	this.minAreaWidth = 160; 	// px
	this.minAreaHeight = 80; 	// px

	this.aComments = [];
	this.aCommentCoords = [];
	this.lastSelectedId = null;
	this.bSaveHistory = true;
}

//-----------------------------------------------------------------------------------
// Public methods
//-----------------------------------------------------------------------------------

CCellCommentator.prototype.isViewerMode = function () {
	return this.worksheet.handlers.trigger("getViewerMode");
};

CCellCommentator.prototype.isLockedComment = function(oComment, lockByDefault, callbackFunc) {
	var lockInfo;

	var model = this.worksheet.model;
	var sheetId = model.getId();

	var objectGuid = oComment.asc_getId();
	if (objectGuid) {

		if (false === this.worksheet.collaborativeEditing.isCoAuthoringExcellEnable()) {
			// Запрещено совместное редактирование
			Asc.applyFunction(callbackFunc, true);
			return;
		}

		if ( lockByDefault )
			this.worksheet.collaborativeEditing.onStartCheckLock();

		// Комментарий к документу блокируем как Range
		if ( !oComment.asc_getDocumentFlag() ) {
			var c = oComment.asc_getCol();
			var r = oComment.asc_getRow();
			var c1, r1, c2, r2;
			var mergedRange = model.getMergedByCell(r, c);
			if (mergedRange) {
				c1 = mergedRange.c1;
				r1 = mergedRange.r1;
				c2 = mergedRange.c2;
				r2 = mergedRange.r2;
			} else {
				c1 = c2 = c;
				r1 = r2 = r;
			}

			lockInfo = this.worksheet.collaborativeEditing.getLockInfo(c_oAscLockTypeElem.Range, /*subType*/null, sheetId, new Asc.asc_CCollaborativeRange(c1, r1, c2, r2));
		} else
			lockInfo = this.worksheet.collaborativeEditing.getLockInfo(c_oAscLockTypeElem.Object, /*subType*/null, sheetId, objectGuid);

		if (false === this.worksheet.collaborativeEditing.getCollaborativeEditing()) {
			// Пользователь редактирует один: не ждем ответа, а сразу продолжаем редактирование
			Asc.applyFunction(callbackFunc, true);
			callbackFunc = undefined;
		}
		if (false !== this.worksheet.collaborativeEditing.getLockIntersection(lockInfo, c_oAscLockTypes.kLockTypeMine, /*bCheckOnlyLockAll*/false)) {
			// Редактируем сами
			Asc.applyFunction(callbackFunc, true);
			return;
		}
		else if (false !== this.worksheet.collaborativeEditing.getLockIntersection(lockInfo, c_oAscLockTypes.kLockTypeOther, /*bCheckOnlyLockAll*/false)) {
			// Уже ячейку кто-то редактирует
			Asc.applyFunction(callbackFunc, false);
			return;
		}

		// Блокируем
		if ( lockByDefault ) {
			this.worksheet.collaborativeEditing.addCheckLock(lockInfo);
			this.worksheet.collaborativeEditing.onEndCheckLock(callbackFunc);
		}
		else
			Asc.applyFunction(callbackFunc, true);
	}
};
CCellCommentator.prototype.callLockComments = function(range) {
	if ( range ) {
		for (var i = 0; i < this.aComments.length; i++) {
			var comment = this.aComments[i];
			if ( (comment.nCol >= range.c1) && (comment.nCol <= range.c2) && (comment.nRow >= range.r1) && (comment.nRow <= range.r2) )
				this.worksheet.model.workbook.handlers.trigger("asc_onLockComment", comment.asc_getId(), comment.asc_getUserId());
		}
	}
};

CCellCommentator.prototype.unlockComments = function() {
	for (var i = 0; i < this.aComments.length; i++) {
		this.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", this.aComments[i].asc_getId());
	}
};

CCellCommentator.prototype.tryUnlockComment = function(id) {
	for (var i = 0; i < this.aComments.length; i++) {
		if ( this.aComments[i].asc_getId() == id ) {
			this.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", id);
			break;
		}
	}
};

CCellCommentator.prototype.moveRangeComments = function(rangeFrom, rangeTo) {
	if ( rangeFrom && rangeTo ) {
		var colOffset = rangeTo.c1 - rangeFrom.c1;
		var rowOffset = rangeTo.r1 - rangeFrom.r1;

		this.worksheet.model.workbook.handlers.trigger("asc_onHideComment");

		for (var i = 0; i < this.aComments.length; i++) {
			var comment = this.aComments[i];

			if ( (comment.nCol >= rangeFrom.c1) && (comment.nCol <= rangeFrom.c2) && (comment.nRow >= rangeFrom.r1) && (comment.nRow <= rangeFrom.r2) ) {

				var commentBefore = new asc_CCommentData(comment);

				comment.nCol += colOffset;
				comment.nRow += rowOffset;
				var cellAddress = new CellAddress(comment.nRow, comment.nCol, 0);
				comment.sQuoteText = cellAddress.getID() + " : " + this.worksheet.model.getCell(cellAddress).getValueWithFormat();
				this.worksheet.model.workbook.handlers.trigger("asc_onChangeCommentData", comment.asc_getId(), comment);

				var commentAfter = new asc_CCommentData(comment);

				var compositeComment = new CompositeCommentData();
				compositeComment.commentBefore = commentBefore;
				compositeComment.commentAfter = commentAfter;

				History.Create_NewPoint();
				History.Add(g_oUndoRedoComment, historyitem_Comment_Change, this.worksheet.model.getId(), null, compositeComment);
			}
		}
	}
};

CCellCommentator.prototype.deleteCommentsRange = function(range) {
	if ( range ) {
		var aCommentId = [], i;
		for (i = 0; i < this.aComments.length; ++i) {
			var comment = this.aComments[i];
			if ( (comment.nCol >= range.c1) && (comment.nCol <= range.c2) && (comment.nRow >= range.r1) && (comment.nRow <= range.r2) ) {
				aCommentId.push(comment.asc_getId());
			}
		}
		History.StartTransaction();
		for (i = 0; i < aCommentId.length; i++) {
			this.asc_removeComment(aCommentId[i]);
		}
		History.EndTransaction();
	}
};

CCellCommentator.prototype.prepareComments = function(arrComments) {
	var commentList = [];
	for (var i = 0; i < arrComments.length; ++i) {
		var comment = {"Id": arrComments[i].asc_getId(), "Comment": arrComments[i]};
		this.addCommentSerialize(comment["Comment"]);
		commentList.push(comment);
	}
	return commentList;
};

CCellCommentator.prototype.addCommentSerialize = function(oComment) {
	if (oComment) {
		if ( !oComment.bDocument && (oComment.nCol != null) && (oComment.nRow != null) ) {
			var cellAddress = new CellAddress(oComment.nRow, oComment.nCol, 0);
			oComment.sQuoteText = cellAddress.getID() + " : " + this.worksheet.model.getCell(cellAddress).getValueWithFormat();
		}
		this.aComments.push(oComment);
	}
};

CCellCommentator.prototype.getCommentsXY = function(x, y) {
	var findCol = this.worksheet._findColUnderCursor(this.pxToPt(x), true);
	var findRow = this.worksheet._findRowUnderCursor(this.pxToPt(y), true);

	return (findCol && findRow) ? this.asc_getComments(findCol.col, findRow.row) : [];
};

CCellCommentator.prototype.drawCommentCells = function() {

	if ( this.isViewerMode() || !this.bShow )
		return;

	var drawCells = []; 	// Associative array
	function getCellId(col, row) { return (col + "_" + row); }

	for (var n = 0; n < this.worksheet.drawingArea.frozenPlaces.length; n++) {
		var frozenPlace = this.worksheet.drawingArea.frozenPlaces[n];
		var fv = frozenPlace.getFirstVisible();
		var lvr = this.worksheet.getLastVisibleRow();
		var lvc = this.worksheet.getLastVisibleCol();

		for (var i = 0; i < this.aComments.length; i++) {
			// Get cell metrics
			var commentCell = this.aComments[i];
			if (commentCell.asc_getDocumentFlag() || commentCell.asc_getHiddenFlag() || commentCell.asc_getSolved())
				continue;

			var mergedRange = this.worksheet.model.getMergedByCell(commentCell.nRow, commentCell.nCol);
			var drawCol = mergedRange ? mergedRange.c2 : commentCell.nCol;
			var drawRow = mergedRange ? mergedRange.r1 : commentCell.nRow;
			if (drawCol < fv.col || drawRow < fv.row || drawCol > lvc || drawRow > lvr)
				continue;

			if ( !frozenPlace.isCellInside({ col: drawCol, row: drawRow }) )
				continue;

			var cellId = getCellId(commentCell.nCol, commentCell.nRow);
			if (drawCells[cellId])
				continue;

			var metrics = this.getCellMetrics(drawCol, drawRow);
			if ( !metrics.result || (metrics.width <= 0) || (metrics.height <= 0) )
				continue;

			this.drawingCtx.beginPath();
			this.drawingCtx.setFillStyle(this.commentIconColor);

			this.drawingCtx.moveTo(metrics.left + metrics.width - this.pxToPt(7), metrics.top);
			this.drawingCtx.lineTo(metrics.left + metrics.width - this.pxToPt(1), metrics.top);
			this.drawingCtx.lineTo(metrics.left + metrics.width - this.pxToPt(1), metrics.top + this.pxToPt(6));
			this.drawingCtx.closePath();
			this.drawingCtx.fill();

			drawCells[cellId] = cellId;
		}
	}
	//if (this.lastSelectedId)
	//	this.asc_selectComment(this.lastSelectedId, false);
};

CCellCommentator.prototype.getTextMetrics = function(text, units) {
	var metrics = { width: 0, height: 0 };

	if (text && text.length && ((typeof (text) == 'string') || (typeof (text) == 'number'))) {
		var textOptions = this.overlayCtx.measureText(text, units);
		metrics.width = textOptions.width;
		metrics.height = textOptions.lineHeight;
	}
	return metrics;
};

CCellCommentator.prototype.getCellMetrics = function(col, row) {
	var metrics = { top: 0, left: 0, width: 0, height: 0, result: false }; 	// px

	for (var n = 0; n < this.worksheet.drawingArea.frozenPlaces.length; n++) {
		var frozenPlace = this.worksheet.drawingArea.frozenPlaces[n];
		if ( !frozenPlace.isCellInside({ col: col, row: row }) )
			continue;

		var fv = frozenPlace.getFirstVisible();
		var mergedRange = this.worksheet.model.getMergedByCell(row, col);

		if (mergedRange && (fv.col < mergedRange.c2) && (fv.row < mergedRange.r2)) {

			var startCol = (mergedRange.c1 > fv.col) ? mergedRange.c1 : fv.col;
			var startRow = (mergedRange.r1 > fv.row) ? mergedRange.r1 : fv.row;

			metrics.top = this.worksheet.getCellTop(startRow, 1) /*- this.worksheet.getCellTop(fv.row, 1) + this.worksheet.getCellTop(0, 1)*/ + this.pxToPt(frozenPlace.getVerticalScroll()) - this.worksheet.getCellTop(0, 1);
			metrics.left = this.worksheet.getCellLeft(startCol, 1) /*- this.worksheet.getCellLeft(fv.col, 1) + this.worksheet.getCellLeft(0, 1)*/ + this.pxToPt(frozenPlace.getHorizontalScroll()) - this.worksheet.getCellLeft(0, 1);

			var i;
			for (i = startCol; i <= mergedRange.c2; i++) {
				metrics.width += this.worksheet.getColumnWidth(i, 1)
			}
			for (i = startRow; i <= mergedRange.r2; i++) {
				metrics.height += this.worksheet.getRowHeight(i, 1)
			}
			metrics.result = true;
		}
		else if ((fv.row <= row) && (fv.col <= col)) {

			metrics.top = this.worksheet.getCellTop(row, 1) /*- this.worksheet.getCellTop(fv.row, 1) + this.worksheet.getCellTop(0, 1)*/ + this.pxToPt(frozenPlace.getVerticalScroll()) - this.worksheet.getCellTop(0, 1);
			metrics.left = this.worksheet.getCellLeft(col, 1) /*- this.worksheet.getCellLeft(fv.col, 1) + this.worksheet.getCellLeft(0, 1)*/ + this.pxToPt(frozenPlace.getHorizontalScroll()) - this.worksheet.getCellLeft(0, 1);
			metrics.width = this.worksheet.getColumnWidth(col, 1);
			metrics.height = this.worksheet.getRowHeight(row, 1);
			metrics.result = true;
		}
	}

	return metrics;
};

CCellCommentator.prototype.updateCommentPosition = function() {
	if (this.lastSelectedId) {
		var comment = this.asc_findComment(this.lastSelectedId);
		if (comment) {

			var commentList = this.asc_getComments(comment.asc_getCol(), comment.asc_getRow());
			if (commentList.length) {

				this.drawCommentCells();
				var coords = this.getCommentsCoords(commentList);

				var indexes = [];
				for (var i = 0; i < commentList.length; i++) {
					indexes.push(commentList[i].asc_getId());
				}
				var metrics = this.getCellMetrics(comment.asc_getCol(), comment.asc_getRow());

				this.worksheet.model.workbook.handlers.trigger( "asc_onUpdateCommentPosition", indexes,
					(metrics.result ? coords.asc_getLeftPX() : -1),
					(metrics.result ? coords.asc_getTopPX() : -1),
					(metrics.result ? coords.asc_getReverseLeftPX() : -1) );
			}
		}
	}
};

CCellCommentator.prototype.updateCommentsDependencies = function(bInsert, operType, updateRange) {
	var t = this;
	var UpdatePair = function(comment, bChange) {
		this.comment = comment;
		this.bChange = bChange;
	};
	var aChangedComments = [];		// Array of UpdatePair

	function updateCommentsList(aComments) {
		if ( aComments.length ) {

			t.bSaveHistory = false;
			var changeArray = [];
			var removeArray = [];

			for (var i = 0; i < aComments.length; i++) {
				if ( aComments[i].bChange ) {
					t.asc_changeComment(aComments[i].comment.asc_getId(), aComments[i].comment, /*bChangeCoords*/true, /*bNoEvent*/true);
					changeArray.push({"Id": aComments[i].comment.asc_getId(), "Comment": aComments[i].comment});
				}
				else {
					t.asc_removeComment(aComments[i].comment.asc_getId(), /*bNoEvent*/true);
					removeArray.push(aComments[i].comment.asc_getId());
				}
			}

			if ( changeArray.length )
				t.worksheet.model.workbook.handlers.trigger("asc_onChangeComments", changeArray);
			if ( removeArray.length )
				t.worksheet.model.workbook.handlers.trigger("asc_onRemoveComments", removeArray);

			t.bSaveHistory = true;
			t.drawCommentCells();
		}
	}

	var i, comment;
	if ( bInsert ) {
		switch (operType) {

			case c_oAscInsertOptions.InsertCellsAndShiftDown: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if ( (comment.nRow >= updateRange.r1) && (comment.nCol >= updateRange.c1) && (comment.nCol <= updateRange.c2) ) {
						comment.nRow += updateRange.r2 - updateRange.r1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscInsertOptions.InsertCellsAndShiftRight: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if ( (comment.nCol >= updateRange.c1) && (comment.nRow >= updateRange.r1) && (comment.nRow <= updateRange.r2) ) {
						comment.nCol += updateRange.c2 - updateRange.c1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscInsertOptions.InsertColumns: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if (comment.nCol >= updateRange.c1) {
						comment.nCol += updateRange.c2 - updateRange.c1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscInsertOptions.InsertRows: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if (comment.nRow >= updateRange.r1) {
						comment.nRow += updateRange.r2 - updateRange.r1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;
		}
	}
	else {
		switch (operType) {

			case "deleteAllComments": {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if ( (updateRange.c1 <= comment.nCol) && (updateRange.c2 >= comment.nCol) && (comment.nRow >= updateRange.r1) && (comment.nRow <= updateRange.r2) ) {
						aChangedComments.push( new UpdatePair(comment, false) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscDeleteOptions.DeleteCellsAndShiftTop: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if ( (comment.nRow > updateRange.r1) && (comment.nCol >= updateRange.c1) && (comment.nCol <= updateRange.c2) ) {
						comment.nRow -= updateRange.r2 - updateRange.r1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
					else if ( (updateRange.c1 <= comment.nCol) && (updateRange.c2 >= comment.nCol) && (comment.nRow >= updateRange.r1) && (comment.nRow <= updateRange.r2) ) {
						aChangedComments.push( new UpdatePair(comment, false) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscDeleteOptions.DeleteCellsAndShiftLeft: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if ( (comment.nCol > updateRange.c2) && (comment.nRow >= updateRange.r1) && (comment.nRow <= updateRange.r2) ) {
						comment.nCol -= updateRange.c2 - updateRange.c1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
					else if ( (updateRange.c1 <= comment.nCol) && (updateRange.c2 >= comment.nCol) && (comment.nRow >= updateRange.r1) && (comment.nRow <= updateRange.r2) ) {
						aChangedComments.push( new UpdatePair(comment, false) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscDeleteOptions.DeleteColumns: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if (comment.nCol > updateRange.c2) {
						comment.nCol -= updateRange.c2 - updateRange.c1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
					else if ( (updateRange.c1 <= comment.nCol) && (updateRange.c2 >= comment.nCol) ) {
						aChangedComments.push( new UpdatePair(comment, false) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;

			case c_oAscDeleteOptions.DeleteRows: {
				for (i = 0; i < this.aComments.length; i++) {
					comment = new asc_CCommentData(this.aComments[i]);
					if (comment.nRow > updateRange.r2) {
						comment.nRow -= updateRange.r2 - updateRange.r1 + 1;
						aChangedComments.push( new UpdatePair(comment, true) );
					}
					else if ( (updateRange.r1 <= comment.nRow) && (updateRange.r2 >= comment.nRow) ) {
						aChangedComments.push( new UpdatePair(comment, false) );
					}
				}
				updateCommentsList(aChangedComments);
			}
				break;
		}
	}
};

CCellCommentator.prototype.showHideComments = function(bHide, bColumn, start, stop) {

	var t = this;
	var aChangedComments = [];

	function updateCommentsList(aComments) {
		if ( aComments.length ) {

			History.StartTransaction();
			for (var i = 0; i < aComments.length; i++) {
				this.asc_changeComment(aComments[i].asc_getId(), aComments[i]);
			}
			History.EndTransaction();
			t.drawCommentCells();
		}
	}


	for (var i = 0; i < this.aComments.length; i++) {
		var comment = new asc_CCommentData(this.aComments[i]);

		if ( bColumn ) {
			if ( (comment.nCol >= start) && (comment.nCol <= stop) ) {
				comment.asc_putHiddenFlag(bHide);
				aChangedComments.push(comment);
			}
		}
		else {
			if ( (comment.nRow >= start) && (comment.nRow <= stop) ) {
				comment.asc_putHiddenFlag(bHide);
				aChangedComments.push(comment);
			}
		}
	}
	updateCommentsList(aChangedComments);
};

CCellCommentator.prototype.sortComments = function(activeRange, changes) {
	var t = this;

	if (changes && activeRange) {

		var updateCommentsList = function(aComments) {
			if ( aComments.length ) {
				History.StartTransaction();

				for (var i = 0; i < aComments.length; i++) {
					this.asc_changeComment(aComments[i].asc_getId(), aComments[i], true);
				}

				History.EndTransaction();
				t.drawCommentCells();
			}
		};

		var aChangedComments = [];
		for (var i = 0; i < changes.places.length; i++) {

			var list = this.asc_getComments(activeRange.c1, changes.places[i].from);
			for (var j = 0; j < list.length; j++) {
				var comment = new asc_CCommentData(list[j]);
				comment.nRow = changes.places[i].to;
				aChangedComments.push(comment);
			}
		}
		updateCommentsList(aChangedComments);
	}
};

CCellCommentator.prototype.resetLastSelectedId = function() {
	this.cleanLastSelection();
	this.lastSelectedId = null;
};

CCellCommentator.prototype.cleanLastSelection = function() {
	if ( this.lastSelectedId ) {
		var lastComment = this.asc_findComment(this.lastSelectedId);
		if ( lastComment ) {
			var lastMetrics = this.getCellMetrics(lastComment.nCol, lastComment.nRow);
			if ( lastMetrics.result ) {
				var extraOffset = this.pxToPt(1);
				this.overlayCtx.clearRect(lastMetrics.left, lastMetrics.top, lastMetrics.width - extraOffset, lastMetrics.height - extraOffset);
			}
		}
	}
};

CCellCommentator.prototype.calcCommentsCoords = function(bSave) {

	this.aCommentCoords = [];

	for (var i = 0; i < this.aComments.length; i++) {

		var commentCell = this.aComments[i];
		if (commentCell.asc_getDocumentFlag() || !this.commentCoordsExist(commentCell.asc_getCol(), commentCell.asc_getRow())) {

			var commentList = this.asc_getComments(commentCell.asc_getCol(), commentCell.asc_getRow());

			// Calculate coords for document comments
			if (bSave && (commentCell.asc_getCol() == 0) && (commentCell.asc_getRow() == 0)) {
				var documentComments = this.asc_getDocumentComments();
				for (var j = 0; j < documentComments.length; j++) {
					commentList.push(documentComments[j]);
				}
			}

			if (commentList.length)
				this.aCommentCoords.push(this.getCommentsCoords(commentList));
		}
	}
};

CCellCommentator.prototype.getCommentsCoords = function(comments) {

	// bWithScroll - учитывать вертикальный и горизонтальный скроллы

	var t = this;
	var coords = new asc_CCommentCoords();

	function calcCommentArea(comment, coords) {

		/*	User name
		 *	Time
		 *	Text
		 */

		var originalFont = t.overlayCtx.getFont();
		var outputFont = originalFont.clone();

		// Set to bold
		outputFont.Bold = true;
		outputFont.FontSize = 9;
		t.overlayCtx.setFont(outputFont);

		// Title
		var txtMetrics = t.getTextMetrics(comment.sUserName, 1);
		coords.dHeightPX += t.ptToPx(txtMetrics.height);
		var userWidth = t.ptToPx(txtMetrics.width);

		if (coords.dWidthPX < userWidth)
			coords.dWidthPX = userWidth;

		txtMetrics = t.getTextMetrics(comment.sTime, 1);
		coords.dHeightPX += t.ptToPx(txtMetrics.height);
		var timeWidth = t.ptToPx(txtMetrics.width);

		if (coords.dWidthPX < timeWidth)
			coords.dWidthPX = timeWidth;

		// Set to normal
		outputFont.Bold = false;
		outputFont.FontSize = 9;
		t.overlayCtx.setFont(outputFont);

		// Comment text
		var commentSpl = comment.sText.split('\n'), i;
		for (i = 0; i < commentSpl.length; i++) {

			txtMetrics = t.getTextMetrics(commentSpl[i], 1);
			coords.dHeightPX += t.ptToPx(txtMetrics.height);
			var lineWidth = t.ptToPx(txtMetrics.width);
			if (coords.dWidthPX < lineWidth)
				coords.dWidthPX = lineWidth;
		}

		for (i = 0; i < comment.aReplies.length; i++) {
			calcCommentArea(comment.aReplies[i], coords);
		}

		// Min values
		if (coords.dWidthPX < t.minAreaWidth)
			coords.dWidthPX = t.minAreaWidth;

		if (coords.dHeightPX < t.minAreaHeight)
			coords.dHeightPX = t.minAreaHeight;

		// Calc other coords
		coords.dWidthMM = t.pxToMm(coords.dWidthPX);
		coords.dHeightMM = t.pxToMm(coords.dHeightPX);

		var headerRowOffPx = t.worksheet.getCellTop(0, 0);
		var headerColOffPx = t.worksheet.getCellLeft(0, 0);

		coords.nCol = comment.nCol;
		coords.nRow = comment.nRow;

		var mergedRange = t.worksheet.model.getMergedByCell(comment.nRow, comment.nCol);

		coords.nLeft = (mergedRange ? mergedRange.c2 : comment.nCol) + 1;
		if ( !t.worksheet.cols[coords.nLeft] ) {
			t.worksheet.expandColsOnScroll(true);
			t.worksheet.handlers.trigger("reinitializeScrollX");
		}

		coords.nTop = mergedRange ? mergedRange.r1 : comment.nRow;
		coords.nLeftOffset = 0;
		coords.nTopOffset = 0;

		var fvr = t.worksheet.getFirstVisibleRow(true);
		var fvc = t.worksheet.getFirstVisibleCol(true);

		var frozenOffset = t.getFrozenOffset();
		if ( t.worksheet.topLeftFrozenCell ) {
			if ( comment.nCol >= t.worksheet.getFirstVisibleCol(false) )
				frozenOffset.offsetX = 0;
			if ( comment.nRow >= t.worksheet.getFirstVisibleRow(false) )
				frozenOffset.offsetY = 0;
		}

		// Tooltip coords
		coords.dReverseLeftPX = t.worksheet.getCellLeft(comment.nCol, 0) - t.worksheet.getCellLeft(fvc, 0) + headerColOffPx + t.ptToPx(frozenOffset.offsetX);
		coords.dLeftPX = t.worksheet.getCellLeft(coords.nLeft, 0) - t.worksheet.getCellLeft(fvc, 0) + headerColOffPx + t.ptToPx(frozenOffset.offsetX);
		coords.dTopPX = t.worksheet.getCellTop(coords.nTop, 0) - t.worksheet.getCellTop(fvr, 0) + headerRowOffPx + t.ptToPx(frozenOffset.offsetY);

		// Correction for merged cell
		var fvrPx = t.worksheet.getCellTop(0, 0);
		if (coords.dTopPX < fvrPx)
			coords.dTopPX = fvrPx;

		coords.dLeftMM = t.worksheet.getCellLeft(coords.nLeft, 3) - t.worksheet.getCellLeft(fvc, 3);
		coords.dTopMM = t.worksheet.getCellTop(coords.nTop, 3) - t.worksheet.getCellTop(fvr, 3);

		var findCol = t.worksheet._findColUnderCursor(t.worksheet.getCellLeft(coords.nLeft, 1) + t.pxToPt(coords.dWidthPX + headerColOffPx) - t.worksheet.getCellLeft(fvc, 1), true);
		var findRow = t.worksheet._findRowUnderCursor(t.worksheet.getCellTop(coords.nTop, 1) + t.pxToPt(coords.dHeightPX + headerRowOffPx) - t.worksheet.getCellTop(fvr, 1), true);

		coords.nRight = findCol ? findCol.col : 0;
		coords.nBottom = findRow ? findRow.row : 0;

		coords.nRightOffset = t.worksheet.getCellLeft(coords.nLeft, 0) + coords.nLeftOffset + coords.dWidthPX + headerColOffPx - t.worksheet.getCellLeft(coords.nRight, 0);
		coords.nBottomOffset = t.worksheet.getCellTop(coords.nTop, 0) + coords.nTopOffset + coords.dHeightPX + headerRowOffPx - t.worksheet.getCellTop(coords.nBottom, 0);

		// Return original font
		t.overlayCtx.setFont(originalFont);
	}

	for (var i = 0; i < comments.length; i++) {
		calcCommentArea(comments[i], coords);
	}

	if (comments.length) {
		coords.dWidthPX += this.commentPadding * 2;
		coords.dWidthMM = this.pxToMm(coords.dWidthPX);

		coords.dHeightPX += this.commentPadding * 2;
		coords.dHeightMM = this.pxToMm(coords.dHeightPX);
	}

	return coords;
};

CCellCommentator.prototype.commentCoordsExist = function(col, row) {

	var result = false;
	for (var i = 0; i < this.aCommentCoords.length; i++) {
		if ((col == this.aCommentCoords[i].nCol) && (row == this.aCommentCoords[i].nRow))
			return true;
	}
	return result;
};

CCellCommentator.prototype.prepareCommentsToSave = function() {

	/*	Calculate the coords of comments for:
	 *	first visible col = 0
	 *	first visible row = 0
	 *	+ document comments -> A1
	 */

	this.calcCommentsCoords(true);
};

CCellCommentator.prototype.cleanSelectedComment = function() {
	if ( this.lastSelectedId ) {
		var comment = this.asc_findComment(this.lastSelectedId);
		if ( comment && !comment.asc_getDocumentFlag() && !comment.asc_getSolved() ) {
			var metrics = this.getCellMetrics(comment.asc_getCol(), comment.asc_getRow());
			if (metrics.result)
				this.overlayCtx.clearRect(metrics.left, metrics.top, metrics.width, metrics.height);
		}
	}
};

CCellCommentator.prototype.getFrozenOffset = function() {

	var offsetX = 0, offsetY = 0, cFrozen = 0, rFrozen = 0, diffWidth = 0, diffHeight = 0;
	if ( this.worksheet.topLeftFrozenCell ) {
		cFrozen = this.worksheet.topLeftFrozenCell.getCol0();
		rFrozen = this.worksheet.topLeftFrozenCell.getRow0();
		diffWidth = this.worksheet.cols[cFrozen].left - this.worksheet.cols[0].left;
		diffHeight = this.worksheet.rows[rFrozen].top - this.worksheet.rows[0].top;

		offsetX = this.worksheet.cols[this.worksheet.visibleRange.c1].left - this.worksheet.cellsLeft - diffWidth;
		offsetY = this.worksheet.rows[this.worksheet.visibleRange.r1].top - this.worksheet.cellsTop - diffHeight;
	}
	return { offsetX: offsetX, offsetY: offsetY };
};

//-----------------------------------------------------------------------------------
// Misc methods
//-----------------------------------------------------------------------------------

CCellCommentator.prototype.pxToPt = function(val) {
	return val * this.ascCvtRatio(0, 1);
};

CCellCommentator.prototype.ptToPx = function(val) {
	return val * this.ascCvtRatio(1, 0);
};

CCellCommentator.prototype.mmToPx = function(val) {
	return val * this.ascCvtRatio(3, 0);
};

CCellCommentator.prototype.pxToMm = function(val) {
	return val * this.ascCvtRatio(0, 3);
};

CCellCommentator.prototype.ascCvtRatio = function(fromUnits, toUnits) {
	return Asc.getCvtRatio(fromUnits, toUnits, this.overlayCtx.getPPIX());
};

// Show/Hide
CCellCommentator.prototype.asc_showComments = function() {
	if ( !this.bShow ) {
		this.bShow = true;
		this.drawCommentCells();
	}
};

CCellCommentator.prototype.asc_hideComments = function() {
	this.bShow = false;
	this.drawCommentCells();
	this.worksheet.model.workbook.handlers.trigger("asc_onHideComment");
};

// Main

CCellCommentator.prototype.asc_showComment = function(id, bNew) {

	var t = this;
	var comment = this.asc_findComment(id);

	if (comment) {

		var callbackFunc = function(result) {

			if ( !result )
				t.worksheet.model.workbook.handlers.trigger("asc_onLockComment", comment.asc_getId(), comment.asc_getUserId());
			else
				t.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", comment.asc_getId());

			var commentList = t.asc_getComments(comment.asc_getCol(), comment.asc_getRow());
			var coords = t.getCommentsCoords(commentList);

			var indexes = [];
			for (var i = 0; i < commentList.length; i++) {
				indexes.push(commentList[i].asc_getId());
			}

			// Second click - hide comment
			if (indexes.length) {
				if ( t.lastSelectedId != id )
					t.worksheet.model.workbook.handlers.trigger("asc_onHideComment");

				t.worksheet.model.workbook.handlers.trigger("asc_onShowComment", indexes, coords.asc_getLeftPX(), coords.asc_getTopPX(), coords.asc_getReverseLeftPX(), bNew);
				t.drawCommentCells();
			}
			t.lastSelectedId = id;
		};

		t.isLockedComment(comment, false, callbackFunc);
	}
	else
		t.lastSelectedId = null;
};

CCellCommentator.prototype.asc_selectComment = function(id, bMove) {
	var comment = this.asc_findComment(id);

	// Чистим предыдущий селект
	this.cleanLastSelection();
	this.lastSelectedId = null;

	if (comment && !comment.asc_getDocumentFlag() && !comment.asc_getSolved()) {

		this.lastSelectedId = id;

		var col = comment.asc_getCol();
		var row = comment.asc_getRow();
		var fvc = this.worksheet.getFirstVisibleCol(true);
		var fvr = this.worksheet.getFirstVisibleRow(true);
		var lvc = this.worksheet.getLastVisibleCol();
		var lvr = this.worksheet.getLastVisibleRow();

		var offset;
		if ( bMove ) {
			if ( (row < fvr) || (row > lvr) ) {
				offset = row - fvr - Math.round(( lvr - fvr ) / 2);
				this.worksheet.scrollVertical(offset);
				this.worksheet.handlers.trigger("reinitializeScrollY");
			}
			if ( (col < fvc) || (col > lvc) ) {
				offset = col - fvc - Math.round(( lvc - fvc ) / 2);
				this.worksheet.scrollHorizontal(offset);
				this.worksheet.handlers.trigger("reinitializeScrollX");
			}
		}

		var metrics = this.getCellMetrics(col, row);
		if (metrics.result) {
			var extraOffset = this.pxToPt(1);
			this.overlayCtx.ctx.globalAlpha = 0.2;
			this.overlayCtx.beginPath();
			this.overlayCtx.clearRect(metrics.left, metrics.top, metrics.width - extraOffset, metrics.height - extraOffset);
			this.overlayCtx.setFillStyle(this.commentFillColor);
			this.overlayCtx.fillRect(metrics.left, metrics.top, metrics.width - extraOffset, metrics.height - extraOffset);
			this.overlayCtx.ctx.globalAlpha = 1;
		}
	}
};

CCellCommentator.prototype.asc_findComment = function(id) {
	function checkCommentId(id, commentObject) {

		if (commentObject.asc_getId() == id)
			return commentObject;

		for (var i = 0; i < commentObject.aReplies.length; i++) {
			var comment = checkCommentId(id, commentObject.aReplies[i]);
			if (comment)
				return comment;
		}
		return null;
	}

	for (var i = 0; i < this.aComments.length; i++) {
		var commentCell = this.aComments[i];
		var obj = checkCommentId(id, commentCell);
		if (obj)
			return obj;
	}
	return null;
};

CCellCommentator.prototype.asc_addComment = function(comment, bIsNotUpdate) {

	var t = this;
	var oComment = comment;
	var bChange = false;
	oComment.wsId = this.worksheet.model.getId();
	oComment.setId();

	if (!oComment.bDocument) {
		if (!bIsNotUpdate) {
			oComment.asc_putCol(this.worksheet.getSelectedColumnIndex());
			oComment.asc_putRow(this.worksheet.getSelectedRowIndex());
		}

		var existComments = this.asc_getComments(oComment.nCol, oComment.nRow);
		if ( existComments.length ) {
			oComment = existComments[0];
			bChange = true;
		}
		else {
			if ((oComment.nCol != null) && (oComment.nRow != null)) {
				var cellAddress = new CellAddress(oComment.nRow, oComment.nCol, 0);
				oComment.sQuoteText = cellAddress.getID() + " : " + this.worksheet.model.getCell(cellAddress).getValueWithFormat();
			}
		}
	}

	function callbackFunc(result) {
		if ( !result ) {
			t.worksheet.model.workbook.handlers.trigger("asc_onLockComment", oComment.asc_getId(), oComment.asc_getUserId());
		}
		else {
			t._addComment(oComment, bChange, bIsNotUpdate);
		}
	}

	if (bIsNotUpdate)
		callbackFunc(true);
	else
		this.isLockedComment(oComment, true, callbackFunc);
};

CCellCommentator.prototype.asc_changeComment = function(id, oComment, bChangeCoords, bNoEvent) {

	var t = this;
	var comment = this.asc_findComment(id);
	if (null === comment)
		return;

	function callbackFunc(result) {
		if ( !result ) {
			t.worksheet.model.workbook.handlers.trigger("asc_onLockComment", comment.asc_getId(), comment.asc_getUserId());
		} else {
			t.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", comment.asc_getId());

			var commentBefore = new asc_CCommentData(comment);
			if (comment) {
				if ( bChangeCoords ) {
					comment.asc_putCol(oComment.asc_getCol());
					comment.asc_putRow(oComment.asc_getRow());
				}
				comment.asc_putText(oComment.asc_getText());
				comment.asc_putQuoteText(oComment.asc_getQuoteText());
				comment.asc_putUserId(oComment.asc_getUserId());
				comment.asc_putUserName(oComment.asc_getUserName());
				comment.asc_putTime(oComment.asc_getTime());
				comment.asc_putSolved(oComment.asc_getSolved());
				comment.asc_putHiddenFlag(oComment.asc_getHiddenFlag());
				comment.aReplies = [];

				if ( !comment.bDocument && (comment.nCol != null) && (comment.nRow != null) ) {
					var cellAddress = new CellAddress(comment.nRow, comment.nCol, 0);
					comment.sQuoteText = cellAddress.getID() + " : " + t.worksheet.model.getCell(cellAddress).getValueWithFormat();
				}

				var count = oComment.asc_getRepliesCount();
				for (var i = 0; i < count; i++) {
					comment.asc_addReply(oComment.asc_getReply(i));
				}
				if ( !bNoEvent )
					t.worksheet.model.workbook.handlers.trigger("asc_onChangeCommentData", comment.asc_getId(), comment);
			}

			if ( t.bSaveHistory ) {
				var commentAfter = new asc_CCommentData(comment);

				var compositeComment = new CompositeCommentData();
				compositeComment.commentBefore = commentBefore;
				compositeComment.commentAfter = commentAfter;

				History.Create_NewPoint();
				History.Add(g_oUndoRedoComment, historyitem_Comment_Change, t.worksheet.model.getId(), null, compositeComment);
			}

			t.drawCommentCells();
		}
	}

	this.isLockedComment(comment, true, callbackFunc);
};

CCellCommentator.prototype.asc_removeComment = function(id, bNoEvent) {

	var t = this;
	var comment = this.asc_findComment(id);
	if (null === comment)
		return;

	function callbackFunc(result) {
		if ( !result ) {
			t.worksheet.model.workbook.handlers.trigger("asc_onLockComment", comment.asc_getId(), comment.asc_getUserId());
		} else {
			t.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", comment.asc_getId());
		}

		t._removeComment(comment, bNoEvent, true);
	}

	this.isLockedComment(comment, true, callbackFunc);
};

// Extra functions

CCellCommentator.prototype.asc_getComments = function(col, row) {

	// Array of root items
	var comments = [];
	var _col = col, _row = row, mergedRange = null;
	var length = this.aComments.length;

	if (!this.bShow)
		return comments;

	if (0 < length) {
		if (null == _col || null == _row) {
			var selectedCell = this.worksheet.getSelectedRange();
			var oFirst = selectedCell.getFirst();
			_col = oFirst.col - 1;
			_row = oFirst.row - 1;
		} else
			mergedRange = this.worksheet.model.getMergedByCell(row, col);

		for (var i = 0; i < length; i++) {
			var commentCell = this.aComments[i];

			if ( !commentCell.asc_getDocumentFlag() /*&& !commentCell.asc_getSolved()*/ && !commentCell.asc_getHiddenFlag() && (commentCell.nLevel == 0) ) {
				if ( !mergedRange ) {
					if ( (_col == commentCell.nCol) && (_row == commentCell.nRow) )
						comments.push(commentCell);
				}
				else {
					if ( (commentCell.nCol >= mergedRange.c1) && (commentCell.nRow >= mergedRange.r1) && (commentCell.nCol <= mergedRange.c2) && (commentCell.nRow <= mergedRange.r2) )
						comments.push(commentCell);
				}
			}
		}
	}
	return comments;
};

CCellCommentator.prototype.asc_getDocumentComments = function() {

	// Array of root items
	var comments = [];

	for (var i = 0; i < this.aComments.length; i++) {
		var commentCell = this.aComments[i];
		if ((commentCell.nLevel == 0) && commentCell.asc_getDocumentFlag())
			comments.push(commentCell);
	}
	return comments;
};

CCellCommentator.prototype._addComment = function (oComment, bChange, bIsNotUpdate) {
	this.worksheet.model.workbook.handlers.trigger("asc_onUnLockComment", oComment.asc_getId());

	// Add new comment
	if (!bChange) {
		History.Create_NewPoint();
		History.Add(g_oUndoRedoComment, historyitem_Comment_Add, this.worksheet.model.getId(), null, new asc_CCommentData(oComment));

		this.aComments.push(oComment);

		if (!bIsNotUpdate)
			this.drawCommentCells();
	}
	this.worksheet.model.workbook.handlers.trigger("asc_onAddComment", oComment.asc_getId(), oComment);
};

CCellCommentator.prototype._removeComment = function (comment, bNoEvent, isDraw) {
	if (!comment)
		return;

	var i, id = comment.asc_getId();
	if (comment.oParent) {
		for (i = 0; i < comment.oParent.aReplies.length; ++i) {
			if (comment.asc_getId() == comment.oParent.aReplies[i].asc_getId()) {

				if (this.bSaveHistory) {
					History.Create_NewPoint();
					History.Add(g_oUndoRedoComment, historyitem_Comment_Remove, this.worksheet.model.getId(), null, new asc_CCommentData(comment.oParent.aReplies[i]));
				}

				comment.oParent.aReplies.splice(i, 1);
				break;
			}
		}
	} else {
		for (i = 0; i < this.aComments.length; i++) {
			if (comment.asc_getId() == this.aComments[i].asc_getId()) {

				if (this.bSaveHistory) {
					History.Create_NewPoint();
					History.Add(g_oUndoRedoComment, historyitem_Comment_Remove, this.worksheet.model.getId(), null, new asc_CCommentData(this.aComments[i]));
				}

				this.aComments.splice(i, 1);
				break;
			}
		}
		if (isDraw)
			this.worksheet.draw();
	}

	if (isDraw)
		this.drawCommentCells();
	if (!bNoEvent)
		this.worksheet.model.workbook.handlers.trigger("asc_onRemoveComment", id);
};

CCellCommentator.prototype.isMissComments = function (range) {
	var oComment, bMiss = false;
	for (var i = 0, length = this.aComments.length; i < length; ++i) {
		oComment = this.aComments[i];
		if (!oComment.bHidden && range.contains(oComment.nCol, oComment.nRow)) {
			if (bMiss)
				return true;
			bMiss = true;
		}
	}

	return false;
};

CCellCommentator.prototype.mergeComments = function (range) {
	var i, length, deleteComments = [], oComment, r1 = range.r1, c1 = range.c1, mergeComment = null;
	for (i = 0, length = this.aComments.length; i < length; ++i) {
		oComment = this.aComments[i];
		if (range.contains(oComment.nCol, oComment.nRow)) {
			if (null === mergeComment)
				mergeComment = oComment;
			else if (oComment.nRow <= mergeComment.nRow && oComment.nCol < mergeComment.nCol) {
				deleteComments.push(mergeComment);
				mergeComment = oComment;
			} else
				deleteComments.push(oComment);
		}
	}

	if (mergeComment && (mergeComment.nCol !== c1 || mergeComment.nRow !== r1)) {
		this._removeComment(mergeComment, false, false);

		// add Comment
		mergeComment.nCol = c1;
		mergeComment.nRow = r1;
		var cellAddress = new CellAddress(mergeComment.nRow, mergeComment.nCol, 0);
		mergeComment.sQuoteText = cellAddress.getID() + " : " + this.worksheet.model.getCell(cellAddress).getValueWithFormat();

		this._addComment(mergeComment, false, true);
	}
	for (i = 0, length = deleteComments.length; i < length; ++i) {
		this._removeComment(deleteComments[i], false, false);
	}
};

// Undo/Redo

CCellCommentator.prototype.Undo = function(type, data) {

	var i, parentComment;
	switch (type) {

		case historyitem_Comment_Add:
			if (data.oParent) {
				parentComment = this.asc_findComment(data.oParent.asc_getId());
				for (i = 0; i < parentComment.aReplies.length; i++) {
					if (parentComment.aReplies[i].asc_getId() == data.asc_getId()) {
						parentComment.aReplies.splice(i, 1);
						break;
					}
				}
			} else {
				for (i = 0; i < this.aComments.length; i++) {
					if (this.aComments[i].asc_getId() == data.asc_getId()) {
						this.aComments.splice(i, 1);
						this.worksheet.model.workbook.handlers.trigger("asc_onRemoveComment", data.asc_getId());
						break;
					}
				}
			}
			break;

		case historyitem_Comment_Remove:
			if (data.oParent) {
				parentComment = this.asc_findComment(data.oParent.asc_getId());
				parentComment.aReplies.push(data);
			} else {
				this.aComments.push(data);
				this.worksheet.model.workbook.handlers.trigger("asc_onAddComment", data.asc_getId(), data);
			}
			break;

		case historyitem_Comment_Change:
			if (data.commentAfter.oParent) {
				parentComment = this.asc_findComment(data.commentAfter.oParent.asc_getId());
				for (i = 0; i < parentComment.aReplies.length; i++) {
					if (parentComment.aReplies[i].asc_getId() == data.asc_getId()) {
						parentComment.aReplies.splice(i, 1);
						parentComment.aReplies.push(data.commentBefore);
						break;
					}
				}
			} else {
				for (i = 0; i < this.aComments.length; i++) {
					if (this.aComments[i].asc_getId() == data.commentAfter.asc_getId()) {
						this.aComments.splice(i, 1);
						this.aComments.push(data.commentBefore);
						this.worksheet.model.workbook.handlers.trigger("asc_onChangeCommentData", data.commentBefore.asc_getId(), data.commentBefore);
						break;
					}
				}
			}
			break;
	}
};

CCellCommentator.prototype.Redo = function(type, data) {

	var parentComment, i;
	switch (type) {

		case historyitem_Comment_Add:
			if (data.oParent) {
				parentComment = this.asc_findComment(data.oParent.asc_getId());
				parentComment.aReplies.push(data);
			} else {
				this.aComments.push(data);
				this.worksheet.model.workbook.handlers.trigger("asc_onAddComment", data.asc_getId(), data);
			}
			break;

		case historyitem_Comment_Remove:
			if (data.oParent) {
				parentComment = this.asc_findComment(data.oParent.asc_getId());
				for (i = 0; i < parentComment.aReplies.length; i++) {
					if (parentComment.aReplies[i].asc_getId() == data.asc_getId()) {
						parentComment.aReplies.splice(i, 1);
						break;
					}
				}
			} else {
				for (i = 0; i < this.aComments.length; i++) {
					if (this.aComments[i].asc_getId() == data.asc_getId()) {
						this.aComments.splice(i, 1);
						this.worksheet.model.workbook.handlers.trigger("asc_onRemoveComment", data.asc_getId());
						break;
					}
				}
			}
			break;

		case historyitem_Comment_Change:
			if (data.commentBefore.oParent) {
				parentComment = this.asc_findComment(data.commentBefore.oParent.asc_getId());
				for (i = 0; i < parentComment.aReplies.length; i++) {
					if (parentComment.aReplies[i].asc_getId() == data.asc_getId()) {
						parentComment.aReplies.splice(i, 1);
						parentComment.aReplies.push(data.commentAfter);
						break;
					}
				}
			} else {
				for (i = 0; i < this.aComments.length; i++) {
					if (this.aComments[i].asc_getId() == data.commentBefore.asc_getId()) {
						this.aComments.splice(i, 1);
						this.aComments.push(data.commentAfter);
						this.worksheet.model.workbook.handlers.trigger("asc_onChangeCommentData", data.commentAfter.asc_getId(), data.commentAfter);
						break;
					}
				}
			}
			break;
	}
};