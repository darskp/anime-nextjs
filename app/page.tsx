import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {

  const data= await fetchAnime(1);

  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="font-bold text-white text-3xl">Explore Anime</h2>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}
