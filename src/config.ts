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
                "stars1j8kf6aa5dufvv2ewasa2rdrj4hcat5nh5mcrjn3g9mh3v4vh8dkqqemceu",
            cw721: "stars1w45ng0u2xqakqd9qah2s4cl4fny3n6qecgfy4uaj6af2mswx4x9qjhknyl",
            name: "RKK_Auction Example",
            type: ICollectionType.AUCTION,
            id: "auction",
            featured: "STARS1"
        },
        {
            marketplace:
                "stars186yewl6puudcagukvzu5j86gkrs9g7sqgqzxprp8nx7mpd9m8yjqaj3hat",
            cw721: "stars10hp8g69fp0lpslq8ky3p20gce7exz6zaj60hxqz6peqel705m8nq6c6dhh",
            name: "RKK Market Place",
            type: ICollectionType.MARKETPLACE,
            id: "marketplace",
        },
        {
            exchange:
                "stars1aaur0kapuruu6uav7gvclaqdk355r3mqunxz6kja6te3asrck64q45wayz",
            cw20: "stars13adug76r6jmathe6ru203lf93vsmsyens9jn2laazt04sauxcjeqktpuyj",
            name: "RKK_TOKEN",
            type: ICollectionType.EXCHANGE,
            id: "exchange",
        },
        {
            crowdfund:
                "stars1rxcmf3m3ge3z9ar07nm50kfqzuwc3mmwvepuv8alpp0fkd44l7ns075hfn",
            cw721: "stars1aj4dn2zz3q0vmlwx8n5002essncp5ug589vfwsvgllz789vrtg2q2dshx3",
            name: "RKK_Crowdfund",
            type: ICollectionType.CROWDFUND,
            id: "crowdfund",
        }
    ],
};

export default CONFIG;
