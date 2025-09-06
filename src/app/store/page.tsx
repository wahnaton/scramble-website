import { listProducts } from "@/src/lib/data/product";
import ProductCard from "@/src/app/store/_components/ProductCard";

export default async function StorePage() {
  const products = await listProducts({})
    .then(({ response }) => response.products)
    .catch(() => []);

  return (
    <main>
      <h2 className="text-center text-black text-4xl mt-10 mb-4 md:mb-10">
        Best Sellers
      </h2>
      <div className="scroll-container text-black flex md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
