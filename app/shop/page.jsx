import React from "react";
import ProductList from "../ui/shop/ProductList";
import Filter from "../ui/shop/Filter";

export default async function ShopPage({ searchParams }) {
  const initialFilters = {
    category: searchParams.category || "",
    color: searchParams.color || "",
    size: searchParams.size || "",
    price: searchParams.price || "",
    sort: searchParams.sort || "",
  };

  const [productsRes, categoriesRes] = await Promise.all([
    fetch(
      `${process.env.URL}/api/products?category=${initialFilters.category}&color=${initialFilters.color}&size=${initialFilters.size}&price=${initialFilters.price}&sort=${initialFilters.sort}`
    ),
    fetch(`${process.env.URL}/api/categories`),
  ]);

  if (!productsRes.ok || !categoriesRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const productsJ = await productsRes.json();
  const categories = await categoriesRes.json();
  const products = Array.isArray(productsJ) ? productsJ : productsJ.rows || [];

  return (
    <main className="min-h-[100dvh] mt-32">
      <header className="text-5xl text-center">Meet the Product</header>
      <section className="flex flex-row">
        <Filter categories={categories} initialFilters={initialFilters} />
        <ProductList data={products} />
      </section>
    </main>
  );
}
