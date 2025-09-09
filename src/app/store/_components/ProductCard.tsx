import Image from "next/image";
import Link from "next/link";
import { HttpTypes } from "@medusajs/types";
import { formatPrice, getCheapestPrice } from "@/src/lib/utils/price-util";
import { getProductColorSwatches } from "@/src/lib/utils/product-colors";

type ProductCardProps = {
  product: HttpTypes.StoreProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const cheapest = getCheapestPrice(product);
  const colors = getProductColorSwatches(product);

  return (
    <div className="group flex flex-col h-full flex-none basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start mb-2">
      {product.thumbnail ? (
        product.handle ? (
          <Link
            href={`/store/products/${product.handle}`}
            className="block relative aspect-[0.75] w-full mb-2 overflow-hidden"
            aria-label={product.title}
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              unoptimized
              sizes="(min-width: 768px) 20vw, 50vw"
            />
          </Link>
        ) : (
          <div className="block relative aspect-[0.75] w-full mb-2 overflow-hidden">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              unoptimized
              sizes="(min-width: 768px) 20vw, 50vw"
            />
          </div>
        )
      ) : null}
      {product.handle ? (
        <Link
          href={`/store/products/${product.handle}`}
          className="text-left block hover:underline"
        >
          {product.title}
        </Link>
      ) : (
        <p className="text-left">{product.title}</p>
      )}
      {colors.length > 0 ? (
        <div className="flex gap-2 mt-1 mb-1">
          {colors.map((hex, i) => (
            <span
              key={`${hex}-${i}`}
              className="inline-block size-7 rounded-full border border-gray-300 cursor-pointer"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      ) : null}
      <p className="text-left text-sm text-gray-600">
        {formatPrice(cheapest.amount, cheapest.currency_code)}
      </p>
    </div>
  );
}
