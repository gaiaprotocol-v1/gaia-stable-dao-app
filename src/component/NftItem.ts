import { DomNode, el, msg } from "skydapp-browser";
import GaiaStableDAOContract from "../contracts/GaiaStableDAOContract";
import GaiaStableDAOOperatorContract from "../contracts/GaiaStableDAOOperatorContract";
import ViewUtil from "../view/ViewUtil";
import Confirm from "./shared/dialogue/Confirm";
import Prompt from "./shared/dialogue/Prompt";
import TransferPopup from "./TransferPopup";

export default class NftItem extends DomNode {

    private imageDisplay: DomNode<HTMLImageElement>;
    private nameDisplay: DomNode;

    private id = -1;

    constructor() {
        super(".nft-item");
        this.append(
            this.imageDisplay = el("img"),
            this.nameDisplay = el("h3"),
            el("a",
                el("img.send", { src: "/images/shared/icn/icn-send.svg", alt: "send icon" }),
                {
                    click: () => new TransferPopup(async (to) => {
                        await GaiaStableDAOContract.transfer(to, this.id);
                        ViewUtil.waitTransactionAndRefresh();
                    }),
                }),
            // el("button", msg("BUYBACK_BUTTON"), {
            //     click: () => new Confirm(msg("BUYBACK_CONFIRM_TITLE"), msg("BUYBACK_CONFIRM_DESC"), msg("BUYBACK_CONFIRM_BUTTON"), async () => {
            //         await GaiaStableDAOOperatorContract.buyBack([this.id]);
            //         ViewUtil.waitTransactionAndRefresh();
            //     }),
            // }),
        );
    }

    public init(id: number) {
        this.id = id;
        this.imageDisplay.domElement.src = `https://storage.googleapis.com/gaia-protocol/stabledao/${id}.png`;
        this.imageDisplay.domElement.alt = `SDAO ${id}`;
        this.nameDisplay.appendText(`#${this.id}`);
    }

    public delete() {
        super.delete();
    }
}
