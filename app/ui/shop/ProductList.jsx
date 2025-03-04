import { React, Suspense } from "react";
import Card from "../../../components/Card";

export default async function ProductList({ searchP }) {
  const initialFilters = {
    category: searchP.category || "",
    color: searchP.color || "",
    size: searchP.size || "",
    price: searchP.price || "",
    sort: searchP.sort || "",
  };

  const [productsRes] = await Promise.all([
    fetch(
      `${process.env.URL}/api/products?category=${initialFilters.category}&color=${initialFilters.color}&size=${initialFilters.size}&price=${initialFilters.price}&sort=${initialFilters.sort}`
    ),
  ]);

  if (!productsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const productsJ = await productsRes.json();
  const products = Array.isArray(productsJ) ? productsJ : productsJ.rows || [];

  return (
    <section>
      <div className="flex flex-row mt-20">
        <section>
          <article className="flex flex-row items-center">
            <Card prod={products} />
          </article>
        </section>
      </div>
    </section>
  );
}
