import { STORE_CART_PANEL_ID } from "../panel-ids";

export function AddToCartButton() {
  return (
    <button
      type="button"
      popoverTarget={STORE_CART_PANEL_ID}
      popoverTargetAction="show"
      aria-controls={STORE_CART_PANEL_ID}
      className="w-full rounded-full bg-black px-6 py-3 text-white cursor-pointer hover:opacity-70"
    >
      Add To Cart
    </button>
  );
}
