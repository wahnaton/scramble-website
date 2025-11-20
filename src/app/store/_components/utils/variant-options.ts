import { HttpTypes } from "@medusajs/types";
import { getProductColorSwatchMap } from "@/src/lib/utils/product-colors";

export type VariantMeta = {
  color: string | null;
  size: string | null;
  images: string[];
  title: string;
};

export type ColorOption = { value: string; swatch: string };

export const getOptionValue = (
  variant: HttpTypes.StoreProductVariant,
  target: "color" | "size",
): string | null => {
  for (const opt of variant.options || []) {
    const title = opt?.option?.title?.toLowerCase();
    if (title === target) return opt?.value ?? null;
  }
  return null;
};

export const extractVariantMetas = (
  product: HttpTypes.StoreProduct,
): Array<{ variant: HttpTypes.StoreProductVariant; meta: VariantMeta }> => {
  return (product.variants || []).map((variant) => {
    const color = getOptionValue(variant, "color");
    const size = getOptionValue(variant, "size");
    const images =
      (variant as HttpTypes.StoreProductVariant & { images?: { url?: string }[] })
        .images?.map((img) => img?.url)
        .filter((url): url is string => Boolean(url)) ?? [];

    return {
      variant,
      meta: {
        color,
        size,
        images: Array.from(new Set(images)),
        title: variant.title || `${product.title} ${color || ""} ${size || ""}`.trim(),
      },
    };
  });
};

export const buildColorOptions = (
  product: HttpTypes.StoreProduct,
  variants: Array<{ meta: VariantMeta }>,
): ColorOption[] => {
  const swatchMap = getProductColorSwatchMap(product);
  const map = new Map<string, string>();

  for (const { meta } of variants) {
    if (meta.color) {
      const swatch = swatchMap.get(meta.color.toLowerCase());
      if (!map.has(meta.color)) {
        map.set(meta.color, swatch!);
      }
    }
  }

  return Array.from(map.entries()).map(([value, swatch]) => ({ value, swatch }));
};

export const buildSizeOptions = (
  variants: Array<{ meta: VariantMeta }>,
): string[] => {
  const ORDER = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"] as const;
  const set = new Set<string>();
  for (const { meta } of variants) {
    if (meta.size) set.add(meta.size);
  }
  return ORDER.filter((s) => set.has(s));
};
