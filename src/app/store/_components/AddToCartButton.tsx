"use client";

import { usePanel } from "./PanelProvider";

export function AddToCartButton() {
  const { openCart } = usePanel();

  return (
    <button
      type="button"
      onClick={openCart}
      className="w-full rounded-full bg-black px-6 py-3 text-white cursor-pointer hover:opacity-90"
    >
      Add To Cart
    </button>
  );
}
