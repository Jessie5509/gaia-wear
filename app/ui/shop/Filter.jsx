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
    <section className="w-[15dvw] mx-5 mt-20">
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
        <select name="size" value={filters.size} onChange={handleFilterChange}>
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <hr />
        <label htmlFor="Sort">Sort</label>
        <select name="sort" value={filters.sort} onChange={handleFilterChange}>
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </aside>

      <article className="flex flex-row gap-3 mt-20">
        {Object.entries(filters)
          .filter(([_, value]) => value)
          .map(([key, value]) => (
            <span
              key={key}
              className="w-fit border flex items-center justify-center content-center"
            >
              <button onClick={() => handleClearFilter(key)}>
                {value}
                <span className="ml-2">×</span>
              </button>
            </span>
          ))}
      </article>
    </section>
  );
}
