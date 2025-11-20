import { listProducts } from "@/src/lib/data/product";
import ProductCard from "@/src/app/store/_components/ProductCard";

export default async function StorePage() {
  const products = await listProducts({})
    .then(({ response }) => response.products)
    .catch(() => []);

  return (
    <main className="m-12">
      <section>
        <h2 className="text-center text-black text-4xl mt-10 mb-4 md:mb-10">
          Best Sellers
        </h2>
        <div className="scroll-container text-black flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
