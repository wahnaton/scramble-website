import { HttpTypes } from "@medusajs/types";

// Returns unique size option values found on the product variants
export function getProductSizes(product: HttpTypes.StoreProduct): string[] {
  const sizes: string[] = [];
  const seen = new Set<string>();

  for (const variant of product.variants || []) {
    for (const opt of variant.options || []) {
      const title = opt?.option?.title;
      if (title?.toLowerCase() === "size") {
        const value = String(opt.value);
        if (!seen.has(value)) {
          seen.add(value);
          sizes.push(value);
        }
      }
    }
  }

  return sizes;
}
