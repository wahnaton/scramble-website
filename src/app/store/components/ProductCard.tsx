"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HttpTypes } from "@medusajs/types";
import { formatPrice, getCheapestPrice } from "@/src/lib/utils/price-util";
import { getProductColorSwatches } from "@/src/lib/utils/product-colors";
import { mapFirstImageByColor } from "@/src/app/store/components/utils/variant-first-image-by-color";
import { ColorHoverSwatches } from "@/src/app/store/components/ColorHoverSwatches";

type ProductCardProps = {
  product: HttpTypes.StoreProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const cheapest = getCheapestPrice(product);
  const colors = getProductColorSwatches(product);
  const [hoverImage, setHoverImage] = useState<string | null>(null);

  const variantImageByColor = useMemo(
    () => mapFirstImageByColor(product),
    [product],
  );

  const primaryImage = hoverImage || product.thumbnail!;

  return (
    <div
      className="group flex flex-col h-full flex-none basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start mb-2"
      onMouseLeave={() => setHoverImage(null)}
    >
      <Link
        href={`/store/products/${product.handle}`}
        className="block relative aspect-[0.75] w-full mb-2 overflow-hidden"
        aria-label={product.title}
      >
        <Image
          src={primaryImage}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
          unoptimized
          sizes="(min-width: 768px) 20vw, 50vw"
        />
      </Link>

      <Link
        href={`/store/products/${product.handle}`}
        className="text-left block hover:underline"
      >
        {product.title}
      </Link>

      <ColorHoverSwatches
        colors={colors}
        onHover={(hex) => {
          if (!hex) return setHoverImage(null);
          const preview = variantImageByColor.get(hex);
          if (preview) setHoverImage(preview);
        }}
      />

      <p className="text-left text-sm text-gray-600">
        {formatPrice(cheapest.amount, cheapest.currency_code)}
      </p>
    </div>
  );
}
