"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skydapp_browser_1 = require("skydapp-browser");
const GaiaStableDAOContract_1 = __importDefault(require("../contracts/GaiaStableDAOContract"));
const GaiaStableDAOOperatorContract_1 = __importDefault(require("../contracts/GaiaStableDAOOperatorContract"));
const ViewUtil_1 = __importDefault(require("../view/ViewUtil"));
const Confirm_1 = __importDefault(require("./shared/dialogue/Confirm"));
const Prompt_1 = __importDefault(require("./shared/dialogue/Prompt"));
class NftItem extends skydapp_browser_1.DomNode {
    constructor() {
        super(".nft-item");
        this.id = -1;
        this.append(this.imageDisplay = (0, skydapp_browser_1.el)("img"), this.nameDisplay = (0, skydapp_browser_1.el)("h3"), (0, skydapp_browser_1.el)("a", (0, skydapp_browser_1.el)("img.send", { src: "/images/shared/icn/icn-send.svg", alt: "send icon" }), {
            click: () => new Prompt_1.default((0, skydapp_browser_1.msg)("SEND_PROMPT_TITLE"), (0, skydapp_browser_1.msg)("SEND_PROMPT_DESC"), (0, skydapp_browser_1.msg)("SEND_PROMPT_BUTTON"), async (to) => {
                await GaiaStableDAOContract_1.default.transfer(to, this.id);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }), (0, skydapp_browser_1.el)("button", (0, skydapp_browser_1.msg)("BUYBACK_BUTTON"), {
            click: () => new Confirm_1.default((0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_TITLE"), (0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_DESC"), (0, skydapp_browser_1.msg)("BUYBACK_CONFIRM_BUTTON"), async () => {
                await GaiaStableDAOOperatorContract_1.default.buyBack([this.id]);
                ViewUtil_1.default.waitTransactionAndRefresh();
            }),
        }));
    }
    init(id) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/supernova/png/${id}.png`;
        this.imageDisplay.domElement.alt = `supernova ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }
    delete() {
        super.delete();
    }
}
exports.default = NftItem;
//# sourceMappingURL=NftItem.js.map