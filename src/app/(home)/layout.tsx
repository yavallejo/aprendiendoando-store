import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Description } from "@/components/home/Description";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <Description />
      <h1 className="text-5xl">Este es el layout del home</h1>
      {children}
    </>
  );
}
