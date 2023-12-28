import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link
      href={`/articulo/${product.handle}?id=${product.id}`}
      className="text-white cursor-pointer no-underline"
    >
      <article className="flex flex-col relative">
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div className="pt-0 rounded-md p-3">
          <h3>{product.title}</h3>
        </div>
        <span className="w-fit inline-block bg-red-200 text-white p-1 absolute -top-2 -right-4 rounded-md rotate-6">
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
};
