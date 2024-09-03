import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <article className="flex h-1/2 shrink-0">
        {/* Carrousel principal */}
          <Image src="/banner.jpg" width={1920} height={1280} alt="Banner" />
      </article>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <span>New Arrivals</span>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <h2>cards</h2>
          {/* big filter clothes cards like pantee */}
        </div>
      </div>
    </main>
  );
}
