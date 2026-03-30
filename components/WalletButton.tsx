"use client";

import { useMemo } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  const label = useMemo(() => {
    if (isPending) return "Connecting";
    if (!isConnected || !address) return "Connect wallet";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address, isConnected, isPending]);

  if (isConnected) {
    return (
      <button className="wallet-button" onClick={() => disconnect()} type="button">
        {label}
      </button>
    );
  }

  return (
    <button
      className="wallet-button"
      onClick={() => connect({ connector: connectors[0] })}
      type="button"
    >
      {label}
    </button>
  );
}
