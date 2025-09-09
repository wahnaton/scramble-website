import Image from "next/image";
import { notFound } from "next/navigation";
import { retrieveProductByHandle } from "@/src/lib/data/product";
import { getProductColorSwatches } from "@/src/lib/utils/product-colors";
import { getProductSizes } from "@/src/lib/utils/product-sizes";

type PageProps = {
  params: Promise<{ handle: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = await retrieveProductByHandle(handle);

  if (!product) return notFound();

  const img = product.thumbnail || product?.images?.[0]?.url || null;
  const N = 5;
  const gallery = img ? Array.from({ length: N }, () => img) : [];
  const colors = getProductColorSwatches(product);
  const sizes = getProductSizes(product);

  return (
    <main className="mx-auto max-w-8xl p-6 text-black">
      <div className="md:flex md:gap-8 md:px-4">
        <div className="md:w-1/2">
          {gallery.length ? (
            <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
              {gallery.map((src, i) => (
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

          {colors.length > 0 ? (
            <div className="flex gap-4 mt-2">
              {colors.map((hex, i) => (
                <span
                  key={`${hex}-${i}`}
                  className="inline-block size-8 rounded-full transition-transform duration-200 ease-out hover:scale-110 cursor-pointer"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          ) : null}

          {sizes.length > 0 ? (
            <>
              <p className="text-md mt-4">Size: </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex w-14 h-9 items-center justify-center border border-black bg-white text-black text-sm transition-transform duration-100 ease-out hover:scale-110 cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
