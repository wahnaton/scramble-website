import { listProducts } from "@/src/lib/data/product";
import Image from "next/image";

export default async function StorePage() {
  const products = await listProducts({})
    .then(({ response }) => response.products)
    .catch(() => []);

  return (
    <main>
      <h2 className="text-center text-black text-4xl mt-10 mb-4 md:mb-10">
        Best Sellers
      </h2>
      <div className="scroll-container text-black">
        {products.map((product) => (
          <div key={product.id} className="text-center mb-2">
            {product.thumbnail ? (
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={320}
                height={320}
                className="mx-auto mb-2 object-contain rounded-md"
                unoptimized
              />
            ) : null}
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
