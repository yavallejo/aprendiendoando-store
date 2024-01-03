import { ProductView } from "@/components/product/productView/ProductView";
import { getProducts } from "@/services/shopify/products";

// Server component
interface ProductDetailsProps {
  searchParams: {
    id: string;
  };
}
export default async function ProductDetails({
  searchParams,
}: ProductDetailsProps) {
  const id = searchParams.id;
  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
}
