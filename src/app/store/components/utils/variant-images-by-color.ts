import { HttpTypes } from "@medusajs/types";
import { getOptionValue } from "@/src/app/store/components/utils/variant-options";
import { getVariantImageUrls } from "@/src/app/store/components/utils/variant-image-urls";
import { getProductColorSwatchMap } from "@/src/lib/utils/product-colors";

export type VariantImagesByColor = {
  key: string;
  label: string;
  images: string[];
  swatch: string | null;
  variantTitle: string;
};

export const collectVariantImagesByColor = (
  product: HttpTypes.StoreProduct,
): VariantImagesByColor[] => {
  const swatches = getProductColorSwatchMap(product);
  const previews = new Map<string, VariantImagesByColor>();

  (product.variants || []).forEach((variant, idx) => {
    if (!variant) return;

    const color = getOptionValue(variant, "color")!;
    const normalizedLabel = color.toLowerCase();
    const swatch = swatches.get(color!.toLowerCase())!;
    const images = getVariantImageUrls(variant);
    const variantTitle = variant.title!;

    const existing = previews.get(normalizedLabel);
    if (!existing) {
      previews.set(normalizedLabel, {
        key: variant.id || `${product.id}-${idx}`,
        label: color,
        swatch,
        images: Array.from(new Set(images)),
        variantTitle,
      });
      return;
    }

    previews.set(normalizedLabel, {
      ...existing,
      images: Array.from(new Set([...existing.images, ...images])),
    });
  });

  return Array.from(previews.values());
};
