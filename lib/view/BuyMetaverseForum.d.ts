import { View, ViewParams } from "skydapp-common";
export default class Buy implements View {
    private container;
    private ticket;
    private price;
    private count;
    private totalDisplay;
    private ticketDisplay;
    private priceDisplay;
    private salesDisplay;
    private approveButton;
    private buyButton;
    private nftList;
    private tokenIds;
    private interval;
    constructor();
    private loadNFTsDebouncer;
    private loadSales;
    private loadTab;
    private loadTotal;
    private loadNFTs;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=BuyMetaverseForum.d.ts.map