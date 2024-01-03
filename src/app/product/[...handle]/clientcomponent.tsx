"use client";
// Cuando necesitamos obtener los search paramas en un componente de tipo client, podemos usar el hook useSearchParams de next/navigation.
import { useParams, useSearchParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return <h1>Product Page</h1>;
}
