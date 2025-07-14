import React from "react";

const EMBEDDABLE_URL =
  "https://embeddables.testnet.andromedaprotocol.io/elgafar-1/rkk-token-exchange/embeddables-exchange-1";

export default function EmbeddableExchange() {
  return (
    <div style={{ width: "100%", minHeight: "600px" }}>
      <iframe
        src={EMBEDDABLE_URL}
        title="Andromeda Embeddable Exchange"
        style={{
          width: "100%",
          height: "600px",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        }}
        allow="clipboard-write; encrypted-media"
      />
    </div>
  );
}