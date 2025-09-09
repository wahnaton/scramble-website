import { HttpTypes } from "@medusajs/types";

export function getProductColorSwatches(
  product: HttpTypes.StoreProduct,
): string[] {
  const swatchMap = (product.metadata?.color_swatches || {}) as Record<
    string,
    string
  >;

  // Normalize swatch keys to lowercase for simple lookup
  const normalized = new Map<string, string>();
  for (const key of Object.keys(swatchMap)) {
    normalized.set(key.toLowerCase(), swatchMap[key]);
  }

  // Collect distinct color option values from variants
  const values = new Set<string>();
  for (const variant of product.variants || []) {
    for (const opt of variant.options || []) {
      const title = opt?.option?.title;
      if (title?.toLowerCase() === "color") {
        values.add(opt.value);
      }
    }
  }

  // Map option values to hex codes via metadata.color_swatches
  const hexes: string[] = [];
  for (const name of values) {
    const hex = normalized.get(name.toLowerCase());
    if (typeof hex === "string") hexes.push(hex);
  }

  return hexes;
}
