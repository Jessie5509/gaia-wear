import Card from "../../../components/Card";
import Pagination from "../../../components/Pagination";

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
      `${process.env.URL}/api/products?category=${initialFilters.category}&color=${initialFilters.color}&size=${initialFilters.size}&price=${initialFilters.price}&sort=${initialFilters.sort}`,
      {
        cache: "no-store",
      }
    ),
  ]);

  if (!productsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const productsJ = await productsRes.json();
  const products = Array.isArray(productsJ) ? productsJ : productsJ.rows || [];

  /* Mapearlos dependiendo el numero
  color: [
      { num: 1, name: "Blanco puro", HEX: "#FFFFFF" },
      { num: 2, name: "Negro carbón", HEX: "#1A1A1A" },
      { num: 3, name: "Gris claro", HEX: "#F2F2F2" },
      { num: 4, name: "Gris pizarra", HEX: "#7D7D7D" },
      { num: 5, name: "Azul marino", HEX: "#2C3E50" },
      { num: 6, name: "Terracota", HEX: "#D35400" },
      { num: 7, name: "Rosa palo", HEX: "#EEC9C9" },
      { num: 8, name: "Naranja", HEX: "FF7000" },
      { num: 9, name: "Rojo", HEX: "#B30000" },
      { num: 10, name: "Verde", HEX: "#6B8E23" },
      { num: 11, name: "Marron", HEX: "#8B4513" },
      { num: 12, name: "Beige", HEX: "#DEDEB0" },
      { num: 13, name: "Golden", HEX: "#DAA520" },
    ],
*/

  return (
    <section className="min-h-screen">
      <div className="flex flex-row mt-20">
      
        <section>
          <Pagination items={products} />
        </section>
      </div>
    </section>
  );
}
