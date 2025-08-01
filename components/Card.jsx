import Link from "next/link";

export default function Card({ prod }) {
  const colors = [
    { num: 1, name: "Pure White", HEX: "#FFFFFF" },
    { num: 2, name: "Charcoal Black", HEX: "#1A1A1A" },
    { num: 3, name: "Light Gray", HEX: "#F2F2F2" },
    { num: 4, name: "Slate Gray", HEX: "#7D7D7D" },
    { num: 5, name: "Navy Blue", HEX: "#2C3E50" },
    { num: 6, name: "Terracotta", HEX: "#D35400" },
    { num: 7, name: "Blush Pink", HEX: "#EEC9C9" },
    { num: 8, name: "Orange", HEX: "#FF7000" },
    { num: 9, name: "Red", HEX: "#B30000" },
    { num: 10, name: "Green", HEX: "#6B8E23" },
    { num: 11, name: "Brown", HEX: "#8B4513" },
    { num: 12, name: "Beige", HEX: "#DEDEB0" },
    { num: 13, name: "Gold", HEX: "#DAA520" },
  ];

  return (
    <main className="flex flex-row flex-wrap gap-3">
      {prod.map((clo) => {
        const productColor = colors.find((c) => c.num === clo.color);

        return (
          <Link href={`/shop/${clo.id}`} key={clo.id}>
            <section
              className="shadow group flex flex-col justify-end w-[17dvw] h-[50dvh] bg-no-repeat bg-center bg-cover max-sm:w-fit"
              style={{ backgroundImage: `url(${clo.image_url})` }}
            >
              <div className="opacity-0 transform translate-y-6 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0 flex flex-col items-center details-card p-4">
                <span>${clo.price}.00</span>
                <article className="flex flex-row items-center">
                  <p
                    className="w-6 h-6 rounded-full mr-2"
                    style={{ backgroundColor: productColor?.HEX }}
                  ></p>
                  <h1>{productColor?.name ?? "Color unknown"}</h1>
                </article>
                <span>{clo.size}</span>
                <span>M</span>
              </div>
            </section>
          </Link>
        );
      })}
    </main>
  );
}
