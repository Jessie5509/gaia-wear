import React from "react";
import ProductList from "../ui/shop/ProductList";
import Filter from "../ui/shop/Filter";

//Los products no se estan cargando filtrados
export default async function ShopPage({ searchParams }) {
  const filters = new URLSearchParams(searchParams);

  const category = filters.get("category") || "";
  const color = filters.get("color") || "";
  const size = filters.get("size") || "";
  const price = filters.get("price") || "";
  const sort = filters.get("sort") || "";

  const [productsRes, categoriesRes] = await Promise.all([
    fetch(
      `${process.env.URL}/api/products?category=${category}&color=${color}&size=${size}&price=${price}&sort=${sort}`
    ),
    fetch(`${process.env.URL}/api/categories`),
  ]);

  if (!productsRes.ok || !categoriesRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await productsRes.json();
  const categories = await categoriesRes.json();

  return (
    <main className="min-h-[100dvh] mt-32">
      <h3 className="text-5xl text-center">
        Categoria / All clothes - Jackets - Hats - etc
      </h3>
      <section className="flex flex-row">
        <Filter
          categories={categories}
          initialFilters={{ category, color, size, price, sort }}
        />
        <ProductList data={products} />
      </section>
    </main>
  );
}
