import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="max-w-[1200px] grid grid-cols-[1fr_450px] gap-20 mt-20 mx-auto my-0">
      <section className="justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className="flex flex-col">
        <h1 className="text-[2rem] font-bold mt-0 mb-2">{product.title}</h1>
        <p className="w-fit text-lg leading-normal tracking-[0.5px] border-purple-600 text-red-500 mt-4 mb-0 px-4 py-2 rounded-2xl border-2 border-solid">
          {product.tags}
        </p>
        <p className="text-lg leading-normal tracking-[0.5px] mx-0 my-4">
          {product.description}
        </p>
        <span className="text-red-600 text-[2.125rem] font-bold">
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  );
};
