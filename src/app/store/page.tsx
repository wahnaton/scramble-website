import { listProducts } from "@/src/lib/data/product";
import ProductCard from "@/src/app/store/_components/ProductCard";

export default async function StorePage() {
  const products = await listProducts({})
    .then(({ response }) => response.products)
    .catch(() => []);

  // For design preview: if only one product exists, repeat it 5 times
  const renderedProducts =
    products.length === 1 ? Array(6).fill(products[0]) : products;

  return (
    <main className="m-12">
      <h2 className="text-center text-black text-4xl mt-10 mb-4 md:mb-10">
        Best Sellers
      </h2>
      <div className="scroll-container text-black flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-4">
        {renderedProducts.map((product, i) => (
          <ProductCard key={`${product.id}-${i}`} product={product} />
        ))}
      </div>
    </main>
  );
}
