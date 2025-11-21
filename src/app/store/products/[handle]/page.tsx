import { notFound } from "next/navigation";
import { retrieveProductByHandle } from "@/src/lib/data/product";
import { ProductVariantViewer } from "@/src/app/store/components/ProductVariantViewer";

type PageProps = {
  params: Promise<{ handle: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = await retrieveProductByHandle(handle);

  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-8xl p-6 text-black">
      <ProductVariantViewer product={product} />
    </main>
  );
}
