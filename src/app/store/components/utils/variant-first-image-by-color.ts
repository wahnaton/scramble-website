import { HttpTypes } from "@medusajs/types";
import { getProductColorSwatchMap } from "@/src/lib/utils/product-colors";
import { getVariantImageUrls } from "@/src/app/store/components/utils/variant-image-urls";

// Returns a map keyed by swatch hex -> first image URL for that color
export const mapFirstImageByColor = (
  product: HttpTypes.StoreProduct,
): Map<string, string> => {
  const swatchMap = getProductColorSwatchMap(product);
  const map = new Map<string, string>();

  (product.variants || []).forEach((variant) => {
    if (!variant) return;

    const colorOpt = (variant.options || []).find(
      (opt) => opt?.option?.title?.toLowerCase() === "color",
    );
    const colorValue = colorOpt?.value;
    if (!colorValue) return;

    const hex = swatchMap.get(colorValue.toLowerCase());
    if (!hex || map.has(hex)) return;

    const url = getVariantImageUrls(variant)[0] ?? null;

    if (!url) return;
    map.set(hex, url);
  });

  return map;
};
