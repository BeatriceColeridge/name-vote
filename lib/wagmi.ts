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

// TODO(builder-code): Replace this placeholder with the real builder code data suffix.
// Example target shape:
// export const builderCodeSuffix = "builder-code=REPLACE_WITH_REAL_VALUE";
export const builderCodeSuffix = "builder-code=TODO_REPLACE_ME";
