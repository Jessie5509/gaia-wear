import React from "react";
import Filter from "./Filter";
import Card from "@/components/Card";

export default function Shop({}) {
  return (
    <main className="mt-32">
      <section>
        <h3 className="text-5xl text-center">
          Categoria / All clothes - Jackets - Hats - etc
        </h3>
        <div className="flex flex-col justify-center mt-20">
          <Filter />
          <section>
            <article className="flex flex-row items-center justify-center">
              <Card />
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
