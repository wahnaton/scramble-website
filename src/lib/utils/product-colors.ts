import { HttpTypes } from "@medusajs/types";

export function getProductColorSwatchMap(
  product: HttpTypes.StoreProduct,
): Map<string, string> {
  const swatchMap = (product.metadata?.color_swatches || {}) as Record<
    string,
    string
  >;

  const normalized = new Map<string, string>();
  for (const key of Object.keys(swatchMap)) {
    normalized.set(key.toLowerCase(), swatchMap[key]);
  }

  return normalized;
}

export function getProductColorSwatches(
  product: HttpTypes.StoreProduct,
): string[] {
  const swatchMap = getProductColorSwatchMap(product);
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
    const hex = swatchMap.get(name.toLowerCase());
    if (typeof hex === "string") hexes.push(hex);
  }

  return hexes;
}
