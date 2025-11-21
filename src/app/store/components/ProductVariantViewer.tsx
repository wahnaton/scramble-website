"use client";

import type { JSX } from "react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import { ColorSelector } from "@/src/app/store/components/ColorSelector";
import { SizeSelector } from "@/src/app/store/components/SizeSelector";
import { AddToCartButton } from "@/src/app/store/components/AddToCartButton";
import {
  buildColorOptions,
  buildSizeOptions,
  extractVariantMetas,
} from "@/src/app/store/components/utils/variant-options";

type ProductVariantViewerProps = {
  product: HttpTypes.StoreProduct;
};

export function ProductVariantViewer({
  product,
}: ProductVariantViewerProps): JSX.Element {
  const variants = useMemo(() => extractVariantMetas(product), [product]);
  const colors = useMemo(
    () => buildColorOptions(product, variants),
    [product, variants],
  );
  const sizes = useMemo(() => buildSizeOptions(variants), [variants]);

  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors[0]?.value || null,
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    sizes[0] || null,
  );

  // keep size valid when color changes
  useEffect(() => {
    if (!selectedColor) return;
    const hasCombo = variants.some(
      ({ meta }) => meta.color === selectedColor && meta.size === selectedSize,
    );
    if (!hasCombo) {
      const firstSizeForColor =
        variants.find(({ meta }) => meta.color === selectedColor)?.meta.size ??
        null;
      setSelectedSize(firstSizeForColor);
    }
  }, [selectedColor, selectedSize, variants]);

  const selected = useMemo(() => {
    if (!selectedColor || !selectedSize) return null;
    return (
      variants.find(
        ({ meta }) =>
          meta.color === selectedColor && meta.size === selectedSize,
      ) || null
    );
  }, [selectedColor, selectedSize, variants]);

  const selectedImages = selected?.meta.images ?? [];
  const selectedTitle = selected?.variant.title || product.title;

  return (
    <div className="md:flex md:gap-8 md:px-4">
      <div className="md:w-1/2">
        {selectedImages.length ? (
          <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
            {selectedImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[0.75] w-1/2 shrink-0 snap-center md:w-auto rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${selectedTitle} ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 80vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-red-600">
            No images returned for this variant selection.
          </p>
        )}
      </div>

      <div className="md:w-1/2 pt-6">
        <h1 className="text-3xl font-semibold">{product.title}</h1>

        <p className="text-md mt-4">Color: </p>
        {colors.length > 0 ? (
          <ColorSelector
            colors={colors}
            value={selectedColor}
            onChange={(color) => setSelectedColor(color)}
          />
        ) : null}

        {sizes.length > 0 ? (
          <>
            <p className="text-md mt-4">Size: </p>
            <SizeSelector
              sizes={sizes}
              value={selectedSize}
              onChange={(size) => setSelectedSize(size)}
            />
          </>
        ) : null}

        <p className="mt-4 text-sm text-gray-700">
          Showing images for: {selectedTitle}
        </p>

        <div className="mt-8">
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}
