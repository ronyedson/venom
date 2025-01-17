import { Browser, BrowserContext, LaunchOptions, BrowserLaunchArgumentOptions, Page } from 'puppeteer';
import { Logger } from 'winston';
export interface CreateConfig {
    /** enabled multidevice
     * @default true
     */
    multidevice?: boolean;
    /** folder name when saving tokens
     * @default 'tokens'
     */
    folderNameToken?: string;
    /**
     * folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
     */
    mkdirFolderToken?: string;
    /**
     * Headless chrome
     * @default true
     */
    headless?: boolean;
    /**
     * Open devtools by default
     * @default false
     */
    devtools?: boolean;
    /**
     * If false will use Chromium instance
     * @default true
     */
    useChrome?: boolean;
    /**
     * Opens a debug session
     * @default false
     */
    debug?: boolean;
    /**
     * If you want to use browserWSEndpoint
     */
    browserWS?: string;
    /**
     * Parameters to be added into the chrome browser instance
     */
    browserArgs?: string[];
    /**
     * Will be passed to puppeteer.launch
     */
    puppeteerOptions?: LaunchOptions | BrowserLaunchArgumentOptions;
    /**
     * Pass a external browser instance, can be used with electron
     */
    browser?: Browser | BrowserContext;
    /**
     * Pass a external page instance, can be used with electron
     */
    page?: Page;
    /**
     * Logs QR automatically in terminal
     * @default true
     */
    logQR?: boolean;
    /**
     * Will disable Spinnies animation, useful for containers (docker) for a better log
     * @default false
     */
    disableSpins?: boolean;
    /**
     * Will disable the welcoming message which appears in the beginning
     * @default false
     */
    disableWelcome?: boolean;
    /**
     * Logs info updates automatically in terminal
     * @default true
     */
    updatesLog?: boolean;
    /**
     * Automatically closes the venom-bot only when scanning the QR code (default 60000 miliseconds, if you want to turn it off, assign 0 or false)
     * @default 60000
     */
    autoClose?: number;
    /**
     * Creates a folder when inserting an object in the client's browser, to work it is necessary to pass the parameters in the function create browserSessionToken
     * @default true
     */
    createPathFileToken?: boolean;
    /**
     * Wait for in chat to return a instance of {@link Whatsapp}
     * @default false
     */
    waitForLogin?: boolean;
    /**
     * automatically download Chromium browser
     * @default true
     */
    BrowserFetcher?: boolean;
    /**
     * Version of the browser that will be used
     * @default '818858'
     */
    chromiumVersion?: string;
    userDataDir?: string;
    /**
     * Wait for in chat to return a instance of {@link Whatsapp}
     * @default false
     */
    logger?: Logger;
    /**
     * Add proxy server
     * @default null
     */
    addProxy?: string[];
    /**
     * Proxy username
     * @default null
     */
    userProxy?: string;
    /**
     * Proxy password
     * @default null
     */
    userPass?: string;
}
export declare const defaultOptions: CreateConfig;
