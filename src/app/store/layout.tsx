"use client";

import { useState } from "react";
import { SlideOverPanel } from "./components/ui/SlideOverPanel";
import { StoreHeader } from "./_components/StoreHeader";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openSearchPanel, setOpenSearchPanel] = useState<"search" | null>(null);
  const [openCartPanel, setOpenCartPanel] = useState<"cart" | null>(null);

  const handleSearchClick = () => {
    setOpenCartPanel(null);
    setOpenSearchPanel(openSearchPanel === "search" ? null : "search");
  };

  const handleCartClick = () => {
    setOpenSearchPanel(null);
    setOpenCartPanel(openCartPanel === "cart" ? null : "cart");
  };

  return (
    <>
      <StoreHeader
        onToggleSearch={handleSearchClick}
        onToggleCart={handleCartClick}
      />
      <div className="min-h-screen bg-white text-white">{children}</div>
      <SlideOverPanel
        open={Boolean(openSearchPanel)}
        onClose={() => {
          setOpenSearchPanel(null);
        }}
        title="search"
      />
      <SlideOverPanel
        open={Boolean(openCartPanel)}
        onClose={() => {
          setOpenCartPanel(null);
        }}
        title="cart"
      />
    </>
  );
}
