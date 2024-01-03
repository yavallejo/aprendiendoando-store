import { ProductsWrapper } from "@/components/store/ProductWrapper";
import { getCollectionProducts } from "@/services/shopify/collections";
import { getProducts } from "@/services/shopify/products";
import { getCollections } from "../../../services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: string;
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  console.log("products", products);

  return <ProductsWrapper products={products} />;
}
