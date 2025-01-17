import { sql } from "@vercel/postgres";
import {
  ProductTable,
  CartItemsTable,
  OrdersTable,
  OrderItemsTable,
  CategoryField,
  ProductCategoryField,
} from "./definitions";

export async function fetchProducts() {
  try {
    const data = await sql`
      SELECT 
        p.*, 
        c.id AS category_id, 
        c.name AS category_name 
      FROM products p
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id;
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchCategories() {
  try {
    const data = await sql<CategoryField>`SELECT * FROM categories`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch categories.");
  }
}

export async function fetchProductCategories() {
  try {
    const data =
      await sql<ProductCategoryField>`SELECT * FROM product_categories`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product categories.");
  }
}

export async function fetchCartItems() {
  try {
    const data = await sql<CartItemsTable>`SELECT * FROM cart_items`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart items.");
  }
}

export async function fetchOrders() {
  try {
    const data = await sql<OrdersTable>`SELECT * FROM orders`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch orders.");
  }
}

export async function fetchOrderItems() {
  try {
    const data = await sql<OrderItemsTable>`SELECT * FROM order_items`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order items.");
  }
}

export async function fetchProductById(id: number) {
  try {
    const data = await sql`
      SELECT 
        p.*, 
        c.id AS category_id, 
        c.name AS category_name 
      FROM products p
      LEFT JOIN product_categories pc ON p.id = pc.product_id
      LEFT JOIN categories c ON pc.category_id = c.id
      WHERE p.id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}

export async function fetchCartItemById(id: number) {
  try {
    const data =
      await sql<CartItemsTable>`SELECT * FROM cart_items WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart item.");
  }
}

export async function fetchOrderById(id: number) {
  try {
    const data = await sql<OrdersTable>`SELECT * FROM orders WHERE id = ${id}`;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order.");
  }
}

export async function fetchFilteredProducts(
  filters: Record<string, string | number>
) {
  let query = `
    SELECT p.*, c.id AS category_id, c.name AS category_name
    FROM products p
    LEFT JOIN product_categories pc ON p.id = pc.product_id
    LEFT JOIN categories c ON pc.category_id = c.id
    WHERE 1=1
  `;
  const values: (string | number)[] = [];

  if (filters.category) {
    query += ` AND c.name ILIKE $${values.length + 1}`;
    values.push(`%${String(filters.category)}%`);
  }

  if (filters.color) {
    query += ` AND p.color ILIKE $${values.length + 1}`;
    values.push(`%${String(filters.color)}%`);
  }

  if (filters.size) {
    query += ` AND p.size ILIKE $${values.length + 1}`;
    values.push(`%${String(filters.size)}%`);
  }

  if (filters.price) {
    query += ` AND p.price <= $${values.length + 1}`;
    values.push(Number(filters.price));
  }

  if (filters.sort) {
    if (filters.sort === "price") {
      query += " ORDER BY p.price";
    } else if (filters.sort === "name") {
      query += " ORDER BY p.name";
    }
  }

  try {
    // Ejecutar la consulta
    const result = await sql.query<ProductTable>(query, values);
    return result.rows; // Devuelve los productos filtrados, ahora con category_id y category_name
  } catch (error) {
    console.error("Error ejecutando la consulta:", error);
    throw new Error("Failed to fetch filtered products.");
  }
}

export async function fetchOrderItemsByOrderId(orderId: number) {
  try {
    const data = await sql<OrderItemsTable>`
      SELECT * FROM order_items
      WHERE order_id = ${orderId}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order items for this order.");
  }
}

export async function fetchCartItemsByUserId(userId: number) {
  try {
    const data = await sql<CartItemsTable>`
      SELECT * FROM cart_items
      WHERE user_id = ${userId}
    `;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cart items for this user.");
  }
}
