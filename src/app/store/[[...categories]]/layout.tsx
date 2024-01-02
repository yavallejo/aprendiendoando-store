import { getCollections } from "@/services/shopify/collections";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collection = await getCollections();

  return (
    <main>
      <nav>
        {collection.map((collection: CollectionType) => (
          <Link key={collection.id} href={`/store/${collection.handle}`}>
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
