import type { JSX } from "react";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import {
  collectVariantImagesByColor,
  VariantImagesByColor,
} from "@/src/app/store/components/utils/variant-images-by-color";

type VariantImageGalleryProps = {
  products: HttpTypes.StoreProduct[];
};

const VariantPreviewCard = ({
  productTitle,
  preview,
}: {
  productTitle: string;
  preview: VariantImagesByColor;
}): JSX.Element => (
  <div className="rounded-lg border border-gray-100 p-3">
    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
      {preview.swatch ? (
        <span
          aria-hidden
          className="inline-block size-5 rounded-full border border-gray-200"
          style={{ backgroundColor: preview.swatch }}
        />
      ) : null}
      <span className="truncate">{preview.label}</span>
    </div>
    <p className="text-xs text-gray-600">
      Variant name: {preview.variantTitle}
    </p>

    {preview.images.length ? (
      <div className="mt-2 space-y-2">
        {preview.images.map((url) => (
          <div
            key={url}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-gray-50"
          >
            <Image
              alt={`${productTitle} - ${preview.label}`}
              src={url}
              fill
              className="object-cover"
              unoptimized
              sizes="(min-width: 1024px) 200px, 50vw"
            />
          </div>
        ))}
      </div>
    ) : (
      <p className="mt-2 text-xs text-red-600">
        No variant image returned for this color
      </p>
    )}
  </div>
);

export function VariantImageGallery({
  products,
}: VariantImageGalleryProps): JSX.Element | null {
  if (!products.length) return null;

  return (
    <section className="mt-12 text-black">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Variant images by color</h3>
        <p className="mt-1 text-sm text-gray-600">
          Only images assigned to each variant are shown. No product-level
          fallbacks.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {products.map((product) => {
          const variants = collectVariantImagesByColor(product);

          return (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-lg font-semibold">{product.title}</p>
                  <p className="text-sm text-gray-600">
                    Variant images grouped by color option
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {variants.length ? (
                  variants.map((variant) => (
                    <VariantPreviewCard
                      key={variant.key}
                      productTitle={product.title}
                      preview={variant}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-600">
                    No variants returned for this product.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
