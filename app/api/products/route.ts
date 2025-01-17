import { NextResponse } from "next/server";
import {
  fetchProducts,
  fetchProductById,
  fetchFilteredProducts,
} from "../../lib/data";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const product = await fetchProductById(Number(id));
      if (!product) {
        return NextResponse.json(
          { message: "Product not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(product);
    }

    // Obtener filtros desde la query string
    const filters = {
      category: searchParams.get("category") || "",
      color: searchParams.get("color") || "",
      price: searchParams.get("price") || "",
      size: searchParams.get("size") || "",
      sort: searchParams.get("sort") || "",
    };
    console.log("filters", filters);

    // Si hay filtros, buscar productos filtrados
    if (Object.values(filters).some((val) => val)) {
      try {
        const filteredProducts = await fetchFilteredProducts(filters);
        return NextResponse.json(filteredProducts);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
        return NextResponse.json(
          { message: "Error fetching filtered products" },
          { status: 500 }
        );
      }
    }

    // Si no hay filtros, devolver todos los productos
    const products = await fetchProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
