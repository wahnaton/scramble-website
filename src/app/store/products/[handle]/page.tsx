import Image from "next/image";
import { notFound } from "next/navigation";
import { retrieveProductByHandle } from "@/src/lib/data/product";
import { getProductColorSwatches } from "@/src/lib/utils/product-colors";
import { getProductSizes } from "@/src/lib/utils/product-sizes";
import { SizeSelector } from "@/src/app/store/_components/SizeSelector";
import { ColorSelector } from "@/src/app/store/_components/ColorSelector";
import { AddToCartButton } from "@/src/app/store/_components/AddToCartButton";

type PageProps = {
  params: Promise<{ handle: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = await retrieveProductByHandle(handle);

  if (!product) return notFound();

  const gallery =
    product.images?.map((image) => image.url).filter(Boolean) ?? [];
  const fallbackImg = product.thumbnail || null;
  const imagesToShow =
    gallery.length > 0 ? gallery : fallbackImg ? [fallbackImg] : [];
  const colors = getProductColorSwatches(product);
  const sizes = getProductSizes(product);

  return (
    <main className="mx-auto max-w-8xl p-6 text-black">
      <div className="md:flex md:gap-8 md:px-4">
        <div className="md:w-1/2">
          {imagesToShow.length ? (
            <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
              {imagesToShow.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[0.75] w-1/2 shrink-0 snap-center md:w-auto rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${product.title} ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(min-width: 768px) 50vw, 80vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="md:w-1/2 pt-6">
          <h1 className="text-3xl font-semibold">{product.title}</h1>

          <p className="text-md mt-4">Color: </p>

          {colors.length > 0 ? <ColorSelector colors={colors} /> : null}

          {sizes.length > 0 ? (
            <>
              <p className="text-md mt-4">Size: </p>
              <SizeSelector sizes={sizes} />
            </>
          ) : null}

          <div className="mt-8">
            <AddToCartButton />
          </div>
        </div>
      </div>
    </main>
  );
}
