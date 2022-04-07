import { View, ViewParams } from "skydapp-common";
export default class Buy implements View {
    private container;
    private tabType;
    private ticket;
    private price;
    private count;
    private kronosTab;
    private supernovaTab;
    private publicTab;
    private totalDisplay;
    private ticketDisplay;
    private priceDisplay;
    private salesDisplay;
    private approveButton;
    private buyButton;
    private tabStore;
    private interval;
    constructor();
    private loadSales;
    private loadTab;
    private loadTotal;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Buy.d.ts.map