import Image from "next/image";
import { notFound } from "next/navigation";
import { retrieveProductByHandle } from "@/src/lib/data/product";

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
        </div>
      </div>
    </main>
  );
}
