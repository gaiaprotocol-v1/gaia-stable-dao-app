import AOS from "aos";
import { DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CollapsibleItem from "../component/shared/CollapsibleItem";
import Layout from "./Layout";

export default class Landing implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("TITLE");
        Layout.current.content.append(this.container = el(".landing-view",
            el("main",
                el(".init-container", { id: "init" },
                    el("img", { "data-aos": "fade-up" }, { src: "/images/logo/logo.png", alt: "gaia stable dao logo" }),
                    el("a", { href: "/buy", "data-aos": "fade-up" }, msg("MINT_BUY_BUTTON")),
                    el("p", { "data-aos": "fade-up" }, msg("INIT_DESC")),
                    el("img.flow-map", { src: "/images/view/landing/flow-map.png", alt: "flow map", "data-aos": "fade-up" }),
                ),
                el(".video-container",
                    el("h2", { "data-aos": "fade-up" }, msg("VIDEO_TITLE")),
                    el(".video", { "data-aos": "fade-up" },
                        el("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed//tWDvU_XiS-c", title: "gaia stable dao introduction video" })
                    ),
                ),
                el(".project-container", { id: "project" },
                    el("h2", { "data-aos": "fade-up" }, msg("PROJECT_TITLE")),
                    el("img", { src: "/images/view/landing/ama.png", alt: "ama" }),
                    el("a", {
                        href: "/Gaia_Protocol_4th_AMA_Final.pdf",
                        download: ""
                    }, msg("PROJECT_DOC_LINK")),
                    // el("#ama", { height: "100vh" }),
                    el("h3", { "data-aos": "fade-up" }, msg("PROJECT_TITLE1")),
                    el("p", { "data-aos": "fade-up" }, msg("PROJECT_DESC1")),
                    el("h3", { "data-aos": "fade-up" }, msg("PROJECT_TITLE2")),
                    el("p", { "data-aos": "fade-up" }, msg("PROJECT_DESC2")),
                    el("h3", { "data-aos": "fade-up" }, msg("PROJECT_TITLE3")),
                    el("p", { "data-aos": "fade-up" }, msg("PROJECT_DESC3")),
                    el("h3", { "data-aos": "fade-up" }, msg("PROJECT_TITLE4")),
                    el("img", { src: "/images/view/landing/profit-structure.png", alt: "profit-structure.png", "data-aos": "fade-up" }),
                    el("p", { "data-aos": "fade-up" }, msg("PROJECT_DESC4")),
                ),
                el(".buy-container", { id: "buy" },
                    el("h2", { "data-aos": "fade-up" }, msg("MINT_BUY_TITLE")),
                    el("a", { href: "/buy", "data-aos": "fade-up" }, msg("MINT_BUY_BUTTON")),
                    el("h3", { "data-aos": "fade-up" }, msg("MINT_BUY_TITLE1")),
                    el("p", { "data-aos": "fade-up" }, msg("MINT_BUY_DESC1")),
                    el("p", { "data-aos": "fade-up" }, msg("MINT_BUY_DESC2")),
                    el("h3", { "data-aos": "fade-up" }, msg("MINT_BUYBACK_TITLE")),
                    el("p", { "data-aos": "fade-up" }, msg("MINT_BUYBACK_DESC1")),
                    el("p", { "data-aos": "fade-up" }, msg("MINT_BUYBACK_DESC2")),
                ),
                el(".nft-container", { id: "nft" },
                    el("h2", { "data-aos": "fade-up" }, msg("SNEAKPEEK_TITLE")),
                    el("section",
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft1.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft2.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft3.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft4.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft5.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft6.png" }),
                        el("img", { "data-aos": "fade-up", src: "/images/view/landing/nft/nft7.png" }),
                    ),
                ),
                el(".team-container", { id: "team" },
                    el("h2", { "data-aos": "fade-up" }, msg("TEAM_TITLE")),
                    el("section",
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE1")),
                            el("p", msg("TEAM_DESC1"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE2")),
                            el("p", msg("TEAM_DESC2"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE3")),
                            el("p", msg("TEAM_DESC3"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE4")),
                            el("p", msg("TEAM_DESC4"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE5")),
                            el("p", msg("TEAM_DESC5"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE6")),
                            el("p", msg("TEAM_DESC6"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE7")),
                            el("p", msg("TEAM_DESC7"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE8")),
                            el("p", msg("TEAM_DESC8"))
                        ),
                        el(".team", { "data-aos": "fade-up" },
                            el("h3", msg("TEAM_TITLE9")),
                            el("p", msg("TEAM_DESC9"))
                        ),
                    ),
                ),
                el(".faq-container", { id: "faq" },
                    el("h2", { "data-aos": "fade-up" }, msg("FAQ_TITLE")),
                    el("section",
                        new CollapsibleItem(msg("FAQ_TITLE1"), msg("FAQ_DESC1")),
                        new CollapsibleItem(msg("FAQ_TITLE2"), msg("FAQ_DESC2")),
                        new CollapsibleItem(msg("FAQ_TITLE3"), msg("FAQ_DESC3")),
                        new CollapsibleItem(msg("FAQ_TITLE4"), msg("FAQ_DESC4")),
                        new CollapsibleItem(msg("FAQ_TITLE5"), msg("FAQ_DESC5")),
                        new CollapsibleItem(msg("FAQ_TITLE6"), msg("FAQ_DESC6")),
                        new CollapsibleItem(msg("FAQ_TITLE7"), msg("FAQ_DESC7")),
                    ),
                ),
                el(".partnership-container", { id: "partnership" },
                    el("h2", { "data-aos": "fade-up" }, msg("PARTNERSHIP_TITLE")),
                    el("section",
                        el("a", { href: "https://dexata.kr", target: "_blank" },
                            el("img", { src: "/images/view/landing/partner/dexata.svg", "data-aos": "fade-up" }),
                        ),
                        el("a", { href: "https://klayswap.com/", target: "_blank" },
                            el("img", { src: "/images/view/landing/partner/klayswap.svg", "data-aos": "fade-up" }),
                        ),
                        el("a", { href: "https://electrik.finance/", target: "_blank" },
                            el("img.electrikFinance", { src: "/images/view/landing/partner/electrikFinance.png", "data-aos": "fade-up" }),
                        ),
                        el("a", { href: "https://swapscanner.io", target: "_blank" },
                            el("img", { src: "/images/view/landing/partner/swapscanner.svg", "data-aos": "fade-up" }),
                        ),
                    ),
                ),
            ),
        ));
        this.init();
    }

    private async init() {
        AOS.init();
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
