import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className="grid grid-cols-5 gap-x-12 gap-y-8 justify-center justify-items-center mt-12 px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
