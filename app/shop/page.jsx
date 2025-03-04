import { React, Suspense } from "react";
import ProductList from "../ui/shop/ProductList";
import Filter from "../ui/shop/Filter";
import SkeletonShop from "../ui/shop/SkeletonShop";

export default async function ShopPage({ searchParams }) {
  const initialFilters = {
    category: searchParams.category || "",
    color: searchParams.color || "",
    size: searchParams.size || "",
    price: searchParams.price || "",
    sort: searchParams.sort || "",
  };

  const [categoriesRes] = await Promise.all([
    fetch(`${process.env.URL}/api/categories`),
  ]);

  if (!categoriesRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const categories = await categoriesRes.json();
  return (
    <main className="min-h-[100dvh] mt-32">
      <header className="text-5xl text-center">Meet the Product</header>
      <section className="flex flex-row">
        <Filter categories={categories} initialFilters={initialFilters} />
        <Suspense fallback={<SkeletonShop cardsNumber={8} />}>
          <ProductList searchP={searchParams} />
        </Suspense>
      </section>
    </main>
  );
}
