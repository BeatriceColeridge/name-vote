import { createConfig, http } from "wagmi";
import { base } from "viem/chains";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: "name-vote",
    }),
    injected(),
  ],
  transports: {
    [base.id]: http("https://mainnet.base.org"),
  },
});

// Base builder code configuration
// builderCode: plain builder code identifier
// builderCodeDataSuffix: encoded suffix payload used for 8021 / attribution flows
export const builderCode = "bc_cnhoax1f";
export const builderCodeSuffix = `builder-code=${builderCode}`;
export const builderCodeDataSuffix =
  "0x62635f636e686f617831660b0080218021802180218021802180218021";
