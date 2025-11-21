import { HttpTypes } from "@medusajs/types";

type VariantWithImages = HttpTypes.StoreProductVariant & {
  images?: { url?: string | null }[] | null;
};

export const getVariantImageUrls = (
  variant: HttpTypes.StoreProductVariant,
): string[] => {
  const withImages = variant as VariantWithImages;
  return (
    withImages.images
      ?.map((img) => img?.url)
      .filter((url): url is string => Boolean(url)) ?? []
  );
};
