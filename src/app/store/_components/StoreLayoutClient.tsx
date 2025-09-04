"use client";

import { useState } from "react";
import { SlideOverPanel } from "../components/ui/SlideOverPanel";
import { StoreHeader } from "./StoreHeader";

export default function StoreLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openPanel, setOpenPanel] = useState<"search" | "cart" | null>(null);

  return (
    <>
      <StoreHeader
        onToggleSearch={() => setOpenPanel("search")}
        onToggleCart={() => setOpenPanel("cart")}
      />
      <div className="min-h-screen bg-white text-white">{children}</div>
      <SlideOverPanel
        open={openPanel === "search"}
        onClose={() => setOpenPanel(null)}
        title="search"
      />
      <SlideOverPanel
        open={openPanel === "cart"}
        onClose={() => setOpenPanel(null)}
        title="cart"
      />
    </>
  );
}
