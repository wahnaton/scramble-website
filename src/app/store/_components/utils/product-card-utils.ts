import { HttpTypes } from "@medusajs/types";
import { getProductColorSwatchMap } from "@/src/lib/utils/product-colors";

type VariantWithImages = HttpTypes.StoreProductVariant & {
  images?: { url?: string | null }[] | null;
};

// Returns a map keyed by swatch hex -> first image URL for that color
export const mapVariantImageByColor = (
  product: HttpTypes.StoreProduct,
): Map<string, string> => {
  const swatchMap = getProductColorSwatchMap(product);
  const map = new Map<string, string>();

  (product.variants as VariantWithImages[] | undefined)?.forEach((variant) => {
    if (!variant) return;

    const colorOpt = (variant.options || []).find(
      (opt) => opt?.option?.title?.toLowerCase() === "color",
    );
    const colorValue = colorOpt?.value;
    if (!colorValue) return;

    const hex = swatchMap.get(colorValue.toLowerCase());
    if (!hex || map.has(hex)) return;

    const url =
      variant.images
        ?.map((img) => img?.url)
        .find((url): url is string => Boolean(url)) || null;

    if (!url) return;
    map.set(hex, url);
  });

  return map;
};
