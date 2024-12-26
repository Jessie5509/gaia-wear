import Shop from "../ui/shop/Shop";
import Filter from "../ui/shop/Filter";

export default async function ShopPage() {
  const productsdb = await fetch(`${process.env.URL}/api/products`, {
    cache: "force-cache",
  });
  const products = await productsdb.json();

  const categoriesdb = await fetch(`${process.env.URL}/api/categories`, {
    cache: "force-cache",
  });
  const categories = await categoriesdb.json();

  return (
    <main className="min-h-[100dvh] mt-32">
      <h3 className="text-5xl text-center">
        Categoria / All clothes - Jackets - Hats - etc
      </h3>
      <section className="flex flex-row">
        <Filter data={categories} />
        <Shop data={products} />
      </section>
    </main>
  );
}
