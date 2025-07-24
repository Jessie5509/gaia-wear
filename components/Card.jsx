import Link from "next/link";

export default function Card({ prod }) {
  
  return (
    <main className="flex flex-row flex-wrap gap-3">
      {prod.map((clo) => (
        <Link href={`/shop/${clo.id}`} key={clo.id}>
          <section
            key={clo.id}
            className="shadow group flex flex-col justify-end w-[17dvw] h-[50dvh] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${clo.image_url})` }}
          >
            <article className="opacity-0 transform translate-y-6 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0 flex flex-row justify-around details-card p-3">
              <span>{clo.color}</span>
              <span>{clo.price}</span>
              <span>{clo.size}</span>
            </article>
          </section>
        </Link>
      ))}
    </main>
  );
}
