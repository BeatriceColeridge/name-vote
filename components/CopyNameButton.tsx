"use client";

import { useState } from "react";

export function CopyNameButton({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(name);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button className="copy-button" onClick={handleCopy} type="button">
      {copied ? "Copied" : "Copy name"}
    </button>
  );
}
