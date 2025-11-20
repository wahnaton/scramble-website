import { HttpTypes } from "@medusajs/types";
import {
  getOptionValue,
} from "@/src/app/store/_components/utils/variant-options";
import { getProductColorSwatchMap } from "@/src/lib/utils/product-colors";

export type VariantColorPreview = {
  key: string;
  label: string;
  images: string[];
  swatch: string | null;
  variantTitle: string;
};

const getVariantImageUrls = (variant: HttpTypes.StoreProductVariant): string[] => {
  const looseVariant = variant as HttpTypes.StoreProductVariant & {
    images?: { url?: string | null }[] | null;
  };

  return (
    looseVariant.images
      ?.map((img) => img?.url)
      .filter((url): url is string => Boolean(url)) ?? []
  );
};

export const collectVariantColorPreviews = (
  product: HttpTypes.StoreProduct,
): VariantColorPreview[] => {
  const swatches = getProductColorSwatchMap(product);
  const previews = new Map<string, VariantColorPreview>();

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
