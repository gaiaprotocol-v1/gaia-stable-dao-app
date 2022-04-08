"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const skydapp_browser_1 = require("skydapp-browser");
const GaiaStableDAOOperatorContract_1 = __importDefault(require("../contracts/GaiaStableDAOOperatorContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Portfolio {
    constructor() {
        Layout_1.default.current.title = (0, skydapp_browser_1.msg)("PORTFOLIO_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".portfolio-view", (0, skydapp_browser_1.el)("h1", "Portfolio"), this.interestDisplay = (0, skydapp_browser_1.el)("h2"), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("p", "아직 이자를 통한 투자가 이루어지지 않았습니다."))));
        this.loadInterest();
    }
    async loadInterest() {
        const kusdtInterest = await GaiaStableDAOOperatorContract_1.default.claimableInterest();
        const kspInterest = await GaiaStableDAOOperatorContract_1.default.claimableKSPReward();
        this.interestDisplay.empty().appendText(`쌓여진 이자: ${ethers_1.utils.formatUnits(kusdtInterest, 6)} | KUSDT: ${ethers_1.utils.formatEther(kspInterest)} KSP`);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Portfolio;
//# sourceMappingURL=Portfolio.js.map