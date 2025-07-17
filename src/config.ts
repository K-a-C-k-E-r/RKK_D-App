import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "stars19xddx2zdky6d9jlsrqqyavfycr6pytwmn799vvqsu7fzd4dp7k4q9etd9q",
            cw721: "stars15l5j0hf80ayj7yuhd6qjhlgwgmgy6apekwpe3k76lgltfhqge3cqemdnth",
            name: "Auction Example",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "ANDR1"
        },
        {
            marketplace:
                "stars1gmjfd922u5jf8szjwad9k47ylsg0ftg6pvnaa7fplh8vrd0w4z0qa827u0",
            cw721: "stars1cf0urzkvhph9nhxe5fv8rq25j8x683z3vcjfwc9ypv5qkar0jw2sv78dwu",
            name: "Marketplace Example",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
        {
            crowdfund:
                "stars1a0el2qceyryftj9cx0ds4as3sgfu4ezj7mumtdp34v5c9qpswzaqw0qq38",
            cw721: "stars1uj5tl3g26022ev9ym6x39xtv09hz3xvc7e3c5wthdpufxtwk7rsscs6jz4",
            name: "Crowdfund Example",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        },
        {
            exchange:
                "stars1aaur0kapuruu6uav7gvclaqdk355r3mqunxz6kja6te3asrck64q45wayz",
            cw20: "stars13adug76r6jmathe6ru203lf93vsmsyens9jn2laazt04sauxcjeqktpuyj",
            name: "RKK_TOKEN",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        },
    ],
};

export default CONFIG;
