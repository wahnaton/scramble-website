import { HttpTypes } from "@medusajs/types";

// Returns sizes from variants in a fixed known order.
// Unknown sizes are ignored.
export function getProductSizes(product: HttpTypes.StoreProduct): string[] {
  const availableSizes = new Set<string>();

  for (const variant of product.variants || []) {
    for (const opt of variant.options || []) {
      const title = opt?.option?.title;
      if (title?.toLowerCase() === "size") {
        const value = String(opt.value);
        availableSizes.add(value);
      }
    }
  }

  const ORDER = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"] as const;
  return ORDER.filter((size) => availableSizes.has(size));
}
