import { ProductsWrapper } from "@/components/store/ProductWrapper";
import { getProducts } from "@/services/shopify";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { products } = await getProducts();
  const { categories } = props.params;
  return <ProductsWrapper products={products} />;
}
