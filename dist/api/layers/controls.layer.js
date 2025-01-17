"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlsLayer = void 0;
var ui_layer_1 = require("./ui.layer");
var layers_interface_1 = require("../helpers/layers-interface");
var obj;
var ControlsLayer = /** @class */ (function (_super) {
    __extends(ControlsLayer, _super);
    function ControlsLayer(page, session, options) {
        var _this = _super.call(this, page, session, options) || this;
        _this.page = page;
        return _this;
    }
    /**
     * Check if there is chat
     * @param contactId {string} id '000000000000@c.us'
     * @returns object
     */
    ControlsLayer.prototype.checkChat = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var contactId = _a.contactId;
                                        return WAPI.checkChat(contactId);
                                    }, { contactId: contactId })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        return [2 /*return*/, reject(result)];
                                    }
                                    else {
                                        return [2 /*return*/, resolve(result)];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Unblock contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    ControlsLayer.prototype.unblockContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (contactId) { return WAPI.unblockContact(contactId); }, contactId)];
            });
        });
    };
    /**
     * Block contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    ControlsLayer.prototype.blockContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (contactId) { return WAPI.blockContact(contactId); }, contactId)];
            });
        });
    };
    /**
     * puts the chat as unread
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    ControlsLayer.prototype.markUnseenMessage = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (contactId) { return WAPI.markUnseenMessage(contactId); }, contactId)];
            });
        });
    };
    /**
     * Deletes the given chat
     * @param chatId {string} id '000000000000@c.us'
     * @returns boolean
     */
    ControlsLayer.prototype.deleteChat = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (chatId) { return WAPI.deleteConversation(chatId); }, chatId)];
            });
        });
    };
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    ControlsLayer.prototype.archiveChat = function (chatId, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var chatId = _a.chatId, option = _a.option;
                        return WAPI.archiveChat(chatId, option);
                    }, { chatId: chatId, option: option })];
            });
        });
    };
    /**
     * Pin and Unpin chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @param nonExistent {boolean} Pin chat, non-existent (optional)
     * @returns object
     */
    ControlsLayer.prototype.pinChat = function (chatId, option, nonExistent) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.page.evaluate(function (_a) {
                                        var chatId = _a.chatId, option = _a.option, nonExistent = _a.nonExistent;
                                        return WAPI.pinChat(chatId, option, nonExistent);
                                    }, { chatId: chatId, option: option, nonExistent: nonExistent })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        reject(result);
                                    }
                                    else {
                                        resolve(result);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Deletes all messages of given chat
     * @param chatId
     * @returns boolean
     */
    ControlsLayer.prototype.clearChatMessages = function (chatId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (chatId) { return WAPI.clearChatMessages(chatId); }, chatId)];
            });
        });
    };
    /**
     * Deletes message all of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    ControlsLayer.prototype.deleteMessageAll = function (chatId, messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var typeFunction, type, check, validating, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    typeFunction = 'deleteMessageAll';
                                    type = 'string';
                                    check = [
                                        {
                                            param: 'chatId',
                                            type: type,
                                            value: chatId,
                                            function: typeFunction,
                                            isUser: true
                                        },
                                        {
                                            param: 'messageId',
                                            type: 'object',
                                            value: messageId,
                                            function: typeFunction,
                                            isUser: true
                                        }
                                    ];
                                    validating = (0, layers_interface_1.checkValuesSender)(check);
                                    if (typeof validating === 'object') {
                                        return [2 /*return*/, reject(validating)];
                                    }
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var contactId = _a.contactId, messageId = _a.messageId;
                                            return WAPI.deleteMessagesAll(contactId, messageId, false);
                                        }, { contactId: chatId, messageId: messageId })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        return [2 /*return*/, reject(result)];
                                    }
                                    else {
                                        return [2 /*return*/, resolve(result)];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Deletes message me of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    ControlsLayer.prototype.deleteMessageMe = function (chatId, messageId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var typeFunction, type, check, validating, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    typeFunction = 'deleteMessageMe';
                                    type = 'string';
                                    check = [
                                        {
                                            param: 'chatId',
                                            type: type,
                                            value: chatId,
                                            function: typeFunction,
                                            isUser: true
                                        },
                                        {
                                            param: 'messageId',
                                            type: 'object',
                                            value: messageId,
                                            function: typeFunction,
                                            isUser: true
                                        }
                                    ];
                                    validating = (0, layers_interface_1.checkValuesSender)(check);
                                    if (typeof validating === 'object') {
                                        return [2 /*return*/, reject(validating)];
                                    }
                                    return [4 /*yield*/, this.page.evaluate(function (_a) {
                                            var contactId = _a.contactId, messageId = _a.messageId;
                                            return WAPI.deleteMessagesMe(contactId, messageId, true);
                                        }, { contactId: chatId, messageId: messageId })];
                                case 1:
                                    result = _a.sent();
                                    if (result['erro'] == true) {
                                        return [2 /*return*/, reject(result)];
                                    }
                                    else {
                                        return [2 /*return*/, resolve(result)];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    ControlsLayer.prototype.setMessagesAdminsOnly = function (chatId, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.page.evaluate(function (_a) {
                        var chatId = _a.chatId, option = _a.option;
                        return WAPI.setMessagesAdminsOnly(chatId, option);
                    }, { chatId: chatId, option: option })];
            });
        });
    };
    return ControlsLayer;
}(ui_layer_1.UILayer));
exports.ControlsLayer = ControlsLayer;
//# sourceMappingURL=controls.layer.js.map