"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWhatsappPage = exports.initBrowser = exports.injectApi = exports.initWhatsapp = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
var ChromeLauncher = require("chrome-launcher");
var fs = require("fs");
var path = require("path");
var puppeteer_extra_1 = require("puppeteer-extra");
var puppeteer_config_1 = require("../config/puppeteer.config");
var StealthPlugin = require("puppeteer-extra-plugin-stealth");
var auth_1 = require("./auth");
var WAuserAgente_1 = require("../config/WAuserAgente");
var chalk = require("chalk");
function initWhatsapp(session, options, browser, token) {
    return __awaiter(this, void 0, void 0, function () {
        var waPage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getWhatsappPage(browser)];
                case 1:
                    waPage = _b.sent();
                    if (!(waPage != null)) return [3 /*break*/, 11];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 10, , 11]);
                    return [4 /*yield*/, waPage.setUserAgent(WAuserAgente_1.useragentOverride)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, waPage.setBypassCSP(true)];
                case 4:
                    _b.sent();
                    if (!(typeof options.userPass === 'string' &&
                        options.userPass.length &&
                        typeof options.userProxy === 'string' &&
                        options.userProxy.length &&
                        Array.isArray(options.addProxy) &&
                        options.addProxy.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, waPage.authenticate({
                            username: options.userProxy,
                            password: options.userPass
                        })];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6: return [4 /*yield*/, waPage.goto(puppeteer_config_1.puppeteerConfig.whatsappUrl, {
                        waitUntil: 'domcontentloaded'
                    })];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, browser.userAgent()];
                case 8:
                    _b.sent();
                    // Auth with token
                    return [4 /*yield*/, (0, auth_1.auth_InjectToken)(waPage, session, options, token)];
                case 9:
                    // Auth with token
                    _b.sent();
                    return [2 /*return*/, waPage];
                case 10:
                    _a = _b.sent();
                    waPage.close().catch(function () { });
                    browser.close().catch(function () { });
                    return [2 /*return*/, false];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.initWhatsapp = initWhatsapp;
function injectApi(page) {
    return __awaiter(this, void 0, void 0, function () {
        var injected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page
                        .evaluate(function () {
                        // @ts-ignore
                        return (typeof window.WAPI !== 'undefined' &&
                            typeof window.Store !== 'undefined');
                    })
                        .catch(function () { return false; })];
                case 1:
                    injected = _a.sent();
                    if (injected) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, page.addScriptTag({
                            path: require.resolve(path.join(__dirname, '../lib/wapi', 'wapi.js'))
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.addScriptTag({
                            path: require.resolve(path.join(__dirname, '../lib/middleware', 'middleware.js'))
                        })];
                case 3:
                    _a.sent();
                    // Make sure WAPI is initialized
                    return [4 /*yield*/, page.waitForFunction(function () {
                            // @ts-ignore
                            return (typeof window.WAPI !== 'undefined' && typeof window.Store !== 'undefined');
                        })];
                case 4:
                    // Make sure WAPI is initialized
                    _a.sent();
                    return [2 /*return*/, page];
            }
        });
    });
}
exports.injectApi = injectApi;
/**
 * Initializes browser, will try to use chrome as default
 * @param session
 */
function initBrowser(session, options, logger, extras) {
    if (extras === void 0) { extras = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var chromePath, browserFetcher, folderSession, folderMulidevice, proxy, browser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chromePath = getChrome();
                    if (!(chromePath && options.useChrome)) return [3 /*break*/, 1];
                    extras = __assign(__assign({}, extras), { executablePath: chromePath });
                    return [3 /*break*/, 4];
                case 1:
                    if (!options.BrowserFetcher) return [3 /*break*/, 3];
                    browserFetcher = puppeteer_extra_1.default.createBrowserFetcher(undefined);
                    logger.info("".concat(chalk.green('Check chromium....')), {
                        session: session,
                        type: 'browser'
                    });
                    logger.info("".concat(chalk.green('Checking the total bytes to download!')), {
                        session: session,
                        type: 'browser-total'
                    });
                    return [4 /*yield*/, browserFetcher
                            .download(options.chromiumVersion, function (downloadedByte, totalBytes) {
                            if (downloadedByte) {
                                logger.info("".concat(chalk.green("wait... ".concat(downloadedByte))), {
                                    session: session,
                                    type: 'browser'
                                });
                            }
                            if (totalBytes) {
                                logger.info("".concat(chalk.green("Total Bytes ".concat(totalBytes))), {
                                    session: session,
                                    type: 'browser-total'
                                });
                            }
                            if (downloadedByte === totalBytes) {
                                logger.info("".concat(chalk.green("extract file....")), {
                                    session: session,
                                    type: 'extract-file'
                                });
                            }
                        })
                            .then(function (revisionInfo) {
                            logger.info("".concat(chalk.green("Chromium Finished result")), {
                                session: session,
                                type: 'browser'
                            });
                            logger.info("".concat(chalk.green("Chromium completed result")), {
                                session: session,
                                type: 'browser-total'
                            });
                            extras = __assign(__assign({}, extras), { executablePath: revisionInfo.executablePath });
                            puppeteer_config_1.puppeteerConfig.chromiumArgs.push("--single-process");
                        })
                            .catch(function (e) {
                            logger.info("".concat(chalk.red("Error chromium: ".concat(e))), {
                                session: session
                            });
                            extras = {};
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    logger.info("".concat(chalk.red('Chrome not found, using chromium')), {
                        session: session
                    });
                    extras = {};
                    _a.label = 4;
                case 4:
                    if (options.multidevice) {
                        folderSession = path.join(path.resolve(process.cwd(), options.mkdirFolderToken, options.folderNameToken, session));
                        folderMulidevice = path.join(path.resolve(process.cwd(), options.mkdirFolderToken, options.folderNameToken));
                        if (!fs.existsSync(folderMulidevice)) {
                            fs.mkdirSync(folderMulidevice, {
                                recursive: true
                            });
                        }
                        fs.chmodSync(folderMulidevice, '777');
                        options.puppeteerOptions = {
                            userDataDir: folderSession
                        };
                        puppeteer_config_1.puppeteerConfig.chromiumArgs.push("--user-data-dir=".concat(folderSession));
                    }
                    // Use stealth plugin to avoid being detected as a bot
                    puppeteer_extra_1.default.use(StealthPlugin());
                    if (Array.isArray(options.addProxy) && options.addProxy.length) {
                        proxy = options.addProxy[Math.floor(Math.random() * options.addProxy.length)];
                        options.browserArgs
                            ? Object.assign(options.browserArgs, ["--proxy-server=".concat(proxy)])
                            : Object.assign(puppeteer_config_1.puppeteerConfig.chromiumArgs, [
                                "--proxy-server=".concat(proxy)
                            ]);
                        // console.log(puppeteerConfig.chromiumArgs);
                    }
                    browser = null;
                    if (!(options.browserWS && options.browserWS != '')) return [3 /*break*/, 6];
                    return [4 /*yield*/, puppeteer_extra_1.default
                            .connect({
                            browserWSEndpoint: options.browserWS
                        })
                            .then(function (e) {
                            browser = e;
                        })
                            .catch(function (e) {
                            logger.info("".concat(chalk.red("Error connect: ".concat(e))), {
                                session: session
                            });
                            browser = 'connect';
                        })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, puppeteer_extra_1.default
                        .launch(__assign(__assign({ headless: options.headless, devtools: options.devtools, args: options.browserArgs
                            ? options.browserArgs
                            : __spreadArray([], puppeteer_config_1.puppeteerConfig.chromiumArgs, true) }, options.puppeteerOptions), extras))
                        .then(function (e) {
                        browser = e;
                    })
                        .catch(function (e) {
                        logger.info("".concat(chalk.red("Error launch: ".concat(e))), {
                            session: session
                        });
                        browser = 'launch';
                    })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/, browser];
            }
        });
    });
}
exports.initBrowser = initBrowser;
function getWhatsappPage(browser) {
    return __awaiter(this, void 0, void 0, function () {
        var pages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, browser.pages().catch()];
                case 1:
                    pages = _a.sent();
                    if (pages.length) {
                        return [2 /*return*/, pages[0]];
                    }
                    return [4 /*yield*/, browser.newPage().catch()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getWhatsappPage = getWhatsappPage;
/**
 * Retrieves chrome instance path
 */
function getChrome() {
    try {
        var chromeInstalations = ChromeLauncher.Launcher.getInstallations();
        return chromeInstalations[0];
    }
    catch (error) {
        return undefined;
    }
}
//# sourceMappingURL=browser.js.map