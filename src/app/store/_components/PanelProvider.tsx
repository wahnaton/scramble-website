"use client";

import { createContext, useContext } from "react";

type Panel = "search" | "cart" | null;

type PanelContextValue = {
  openCart: () => void;
  openSearch: () => void;
  close: () => void;
};

const PanelContext = createContext<PanelContextValue>({
  openCart: () => {},
  openSearch: () => {},
  close: () => {},
});

export function PanelProvider({
  children,
  setOpenPanel,
}: {
  children: React.ReactNode;
  setOpenPanel: (panel: Panel) => void;
}) {
  return (
    <PanelContext.Provider
      value={{
        openCart: () => setOpenPanel("cart"),
        openSearch: () => setOpenPanel("search"),
        close: () => setOpenPanel(null),
      }}
    >
      {children}
    </PanelContext.Provider>
  );
}

export function usePanel() {
  return useContext(PanelContext);
}
