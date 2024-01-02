import { getProducts } from "@/services/shopify/products";
import Image from "next/image";

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <div className="main-products">
      {products.products.map((product: any) => (
        <div className="main-products__item" key={product.id}>
          <div className="relative w-64 h-64">
            <Image src={product.image.src} alt={product.title} fill />
          </div>
          <div className="main-products__item__title">{product.title}</div>
          <div className="main-products__item__price">
            {product.variants[0].price}
          </div>
        </div>
      ))}
    </div>
  );
};
