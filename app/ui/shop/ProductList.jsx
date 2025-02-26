'use client'
import React from "react";
import Card from "../../../components/Card";
import { useEffect } from "react";

export default function ProductList({ data }) {
  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <section>
      <div className="flex flex-row mt-20">
        <section>
          <article className="flex flex-row items-center">
            <Card prod={data} />
          </article>
        </section>
      </div>
    </section>
  );
}
