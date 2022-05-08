import { DomNode, el, msg } from "skydapp-browser";

export default class PortfolioItem extends DomNode {

    private titleDisplay: DomNode;
    private imageDisplay: DomNode<HTMLImageElement>;

    private desc1Display: DomNode;
    private desc2Display: DomNode;
    private desc3Display: DomNode;
    private desc4Display: DomNode;
    private desc5Display: DomNode;

    private claimButton: DomNode;

    constructor(
        id: number,
        desc1: string,
        desc2: string,
        desc3: string,
        desc4?: string,
        desc5?: string,
    ) {
        super(".portfolio-item");
        this.append(
            el(".title",
                this.titleDisplay = el("h2", `${id}${msg("PORTFOLIO_ITEM_TITLE")}`),
                this.imageDisplay = el("img", { src: `/images/logo/${desc1}.png`, alt: "logo" }),
            ),
            el(".content",
                this.desc1Display = el("p", `${msg("PORTFOLIO_ITEM_DESC1")} ${desc1}`),
                this.desc2Display = el("p", `${msg("PORTFOLIO_ITEM_DESC2")} ${desc2}`),
                this.desc3Display = el("p", `${msg("PORTFOLIO_ITEM_DESC3")} ${desc3}`),
                // this.desc4Display = el("p", `${msg("PORTFOLIO_ITEM_DESC4")}: ${desc4}`),
                // this.desc5Display = el("p", `${msg("PORTFOLIO_ITEM_DESC5")}: ${desc5}`),
            ),
            // this.claimButton = el("button", msg("PORTFOLIO_BUTTON")),
        );
    }

    public delete() {
        super.delete();
    }
}
