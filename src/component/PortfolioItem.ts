import { DomNode, el, msg } from "skydapp-browser";
import CommonUtil from "../CommonUtil";

export default class PortfolioItem extends DomNode {

    private titleDisplay: DomNode;
    private imageDisplay: DomNode<HTMLImageElement>;

    private desc1Display: DomNode;
    private desc2Display: DomNode;
    private desc3Display: DomNode;
    private desc4Display: DomNode;
    private desc5Display: DomNode;
    private priceDisplay: DomNode;
    private rateDisplay: DomNode;

    private claimButton: DomNode;

    constructor(
        id: number,
        symbol: string,
        name: string,
        startPrice: number,
        desc2: string,
        desc3: string,
        desc4?: string,
        desc5?: string,
    ) {
        super(".portfolio-item");
        this.append(
            el(".title",
                this.titleDisplay = el("h2", `${id}${msg("PORTFOLIO_ITEM_TITLE")}`),
                this.imageDisplay = el("img", { src: `/images/logo/${name}.png`, alt: "logo" }),
            ),
            el(".content",
                this.desc1Display = el("p", `${msg("PORTFOLIO_ITEM_DESC1")} ${symbol.toUpperCase()} (${name.toUpperCase()})`),
                this.desc2Display = el("p", `${msg("PORTFOLIO_ITEM_DESC2")} ${desc2}`),
                el("p", `시작가: ₩${startPrice}`),
                el(".price-container",
                    this.priceDisplay = el("p", "현재가: "),
                    this.rateDisplay = el("p.rate", ""),
                ),
                this.desc3Display = el("p", `${msg("PORTFOLIO_ITEM_DESC3")} ${desc3}`),
                // this.desc4Display = el("p", `${msg("PORTFOLIO_ITEM_DESC4")}: ${desc4}`),
                // this.desc5Display = el("p", `${msg("PORTFOLIO_ITEM_DESC5")}: ${desc5}`),
            ),
            // this.claimButton = el("button", msg("PORTFOLIO_BUTTON")),
        );

        this.getPrice(symbol, startPrice);
    }

    async getPrice(symbol: string, price: number) {
        const result = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&ids=${symbol}`);
        const data = await result.json();
        const rate = (data[0].current_price / price) * 100 - 100;
        this.priceDisplay.empty();
        this.priceDisplay.appendText(`현재가: ₩${CommonUtil.numberWithCommas(data[0].current_price)}`);
        this.rateDisplay.appendText(`(${rate.toFixed(2)}%)`);
        if (rate > 0) {
            this.rateDisplay.style({
                color: "#D9000F"
            })
        } else {
            this.rateDisplay.style({
                color: "#1738C1"
            })
        }
    }

    public delete() {
        super.delete();
    }
}
