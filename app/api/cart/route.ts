import { NextResponse } from "next/server";
import { fetchOrders } from "../../lib/data";

export async function GET() {
  try {
    const orders = await fetchOrders();
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // const { searchParams } = new URL(request.url);
    // const id = searchParams.get("id");
    // if (id) {
    //   const product = await fetchProductById(Number(id));
    //   if (!product) {
    //     return NextResponse.json(
    //       { message: "Product not found" },
    //       { status: 404 }
    //     );
    //   }
    //   return NextResponse.json(product);
    // }
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
