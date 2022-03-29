import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";

export default class PortfolioItem extends DomNode {

    private titleDisplay: DomNode;
    private imageDisplay: DomNode<HTMLImageElement>;

    private desc1Display: DomNode;
    private desc2Display: DomNode;
    private desc3Display: DomNode;
    private desc4Display: DomNode;
    private desc5Display: DomNode;

    private claimButton: DomNode;

    constructor() {
        super(".portfolio-item");
        this.append(
            el(".title",
                this.titleDisplay = el("h2", msg("PORTFOLIO_ITEM_TITLE")),
                this.imageDisplay = el("img", { src: "/images/shared/img/img-logo.png", alt: "logo" }),
            ),
            el(".content",
                this.desc1Display = el("p", msg("PORTFOLIO_ITEM_DESC1")),
                this.desc2Display = el("p", msg("PORTFOLIO_ITEM_DESC2")),
                this.desc3Display = el("p", msg("PORTFOLIO_ITEM_DESC3")),
                this.desc4Display = el("p", msg("PORTFOLIO_ITEM_DESC4")),
                this.desc5Display = el("p", msg("PORTFOLIO_ITEM_DESC5")),
            ),
            this.claimButton = el("button", msg("PORTFOLIO_BUTTON")),
        );
    }

    public delete() {
        super.delete();
    }
}
