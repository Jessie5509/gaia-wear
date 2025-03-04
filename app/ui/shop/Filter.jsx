"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter({ categories, initialFilters }) {
  const [filters, setFilters] = useState(initialFilters);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          newSearchParams.set(key, value);
        } else {
          newSearchParams.delete(key);
        }
      });

      router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, 600);

    return () => clearTimeout(timeout);
  }, [filters, router, searchParams]);

  const handleClearFilter = (key) => {
    const updatedFilters = { ...filters, [key]: "" };
    setFilters(updatedFilters);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(key);

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  return (
    <main>
      <article className="flex flex-row gap-3 mt-8 mx-5">
        {Object.entries(filters)
          .filter(([_, value]) => value)
          .map(([key, value]) => (
            <p
              key={key}
              className="w-fit border rounded-lg flex items-baseline justify-center bg-[#D9D9D5] px-1 py-1"
            >
              <button
                className="flex items-baseline"
                onClick={() => handleClearFilter(key)}
              >
                {value}
                <p className="ml-1 bg-close bg-no-repeat bg-cover w-[0.6rem] h-[0.6rem]"></p>
              </button>
            </p>
          ))}
      </article>

      <section className="min-w-[15dvw] max-w-fit mx-8 mt-10">
        <aside className="flex flex-col">
          <label htmlFor="Category">Categories</label>
          <hr />
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mt-3">
                <input
                  type="radio"
                  name="category"
                  value={category.name}
                  className="m-1 align-bottom"
                  onChange={handleFilterChange}
                  checked={filters.category === category.name}
                />
                {category.name}
              </li>
            ))}
          </ul>
          <hr />
          <label htmlFor="Color">Color</label>
          <select
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
          >
            <option value="">Select Color</option>
            <option value="Beige">Beige</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
          </select>
          <hr />
          <label htmlFor="Price">Price</label>
          <div className="relative">
            <input
              type="range"
              name="price"
              min="0"
              max="1000"
              value={filters.price}
              onChange={handleFilterChange}
            />
            <span
              className="absolute top-[-20px] left-0 right-0 text-center"
              style={{
                left: `calc(${(filters.price / 1000) * 100}% - 20px)`,
              }}
            >
              ${filters.price}
            </span>
          </div>
          <hr />
          <label htmlFor="Size">Size</label>
          <select
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
          >
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <hr />
          <label htmlFor="Sort">Sort</label>
          <select
            name="sort"
            value={filters.sort}
            onChange={handleFilterChange}
          >
            <option value="">Sort</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </aside>
      </section>
    </main>
  );
}
