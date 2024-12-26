import { sql } from "@vercel/postgres";
import {
  products,
  categories,
  productCategories,
} from "../../lib/placeholder-data";

async function seedProducts() {
  await sql`
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price INT NOT NULL,
    material VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    color VARCHAR(255) NOT NULL,
    size VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL
  );
`;

  await Promise.all(
    products.map(
      (product) => sql`
      INSERT INTO products (name, description, price, material, stock, color, size, image_url)
      VALUES (${product.name}, ${product.description}, ${product.price}, ${product.material}, ${product.stock}, ${product.color}, ${product.size}, ${product.image_url})
      ON CONFLICT (id) DO NOTHING;
    `
    )
  );
}

async function seedCategories() {
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `;

  await Promise.all(
    categories.map(
      (category) => sql`
        INSERT INTO categories (name, description)
        VALUES (${category.name}, ${category.description})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

async function seedProductCategories() {
  await sql`
    CREATE TABLE IF NOT EXISTS product_categories (
      product_id INT NOT NULL,
      category_id INT NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
      CONSTRAINT product_categories_unique UNIQUE (product_id, category_id)
    );
  `;

  await Promise.all(
    productCategories.map(
      (productCategory) => sql`
        INSERT INTO product_categories (product_id, category_id)
        VALUES (${productCategory.product_id}, ${productCategory.category_id})
        ON CONFLICT (product_id, category_id) DO NOTHING;
      `
    )
  );
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await seedProducts();
    await seedCategories();
    await seedProductCategories();
    await sql`COMMIT`;

    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      { status: 200 }
    );
  } catch (error) {
    await sql`ROLLBACK`;

    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error seeding database:", error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
