import Link from "next/link";
export default function Home() {
  return (
    <div >
      <main>
        <ul className="flex gap-10 my-4 items-center justify-center w-full text-4xl font-extrabold text-zinc-300 ">
          <li><Link href="/characters" className="hover:text-zinc-400">Characters</Link></li>
          <li><Link href="/locations" className="hover:text-zinc-400">Locations</Link></li>
          <li><Link href="/episodes" className="hover:text-zinc-400">Episodes</Link></li>
        </ul>
      </main>
    </div>
  );
}
