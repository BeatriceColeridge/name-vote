import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { base } from "wagmi/chains";
import { baseAccount, injected } from "wagmi/connectors";

export const builderCode = "bc_cnhoax1f";
export const builderCodeSuffix = `builder-code=${builderCode}`;
export const builderCodeDataSuffix =
  "0x62635f636e686f617831660b0080218021802180218021802180218021";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    baseAccount(),
    injected(),
  ],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [base.id]: http("https://mainnet.base.org"),
  },
  dataSuffix: builderCodeDataSuffix,
});
