import { SlideOverPanel } from "../components/ui/SlideOverPanel";
import { StoreHeader } from "./StoreHeader";
import { StoreFooter } from "./StoreFooter";
import { STORE_CART_PANEL_ID, STORE_SEARCH_PANEL_ID } from "../panel-ids";

export default function StoreLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreHeader
        searchPopoverId={STORE_SEARCH_PANEL_ID}
        cartPopoverId={STORE_CART_PANEL_ID}
      />
      <div className="min-h-screen bg-white text-white">{children}</div>
      <StoreFooter />
      <SlideOverPanel id={STORE_SEARCH_PANEL_ID} title="search" />
      <SlideOverPanel id={STORE_CART_PANEL_ID} title="cart" />
    </>
  );
}
