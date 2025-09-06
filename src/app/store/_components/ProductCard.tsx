import Image from "next/image";
import Link from "next/link";
import { HttpTypes } from "@medusajs/types";

type ProductCardProps = {
  product: HttpTypes.StoreProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
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
      <p className="text-left">{product.title}</p>
    </div>
  );
}
