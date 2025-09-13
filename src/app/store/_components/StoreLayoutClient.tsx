"use client";

import { useState } from "react";
import { SlideOverPanel } from "../components/ui/SlideOverPanel";
import { StoreHeader } from "./StoreHeader";
import { StoreFooter } from "./StoreFooter";
import { PanelProvider } from "./PanelProvider";

export default function StoreLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openPanel, setOpenPanel] = useState<"search" | "cart" | null>(null);

  return (
    <PanelProvider setOpenPanel={setOpenPanel}>
      <StoreHeader
        onToggleSearch={() => setOpenPanel("search")}
        onToggleCart={() => setOpenPanel("cart")}
      />
      <div className="min-h-screen bg-white text-white">{children}</div>
      <StoreFooter />
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
    </PanelProvider>
  );
}
