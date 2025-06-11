import Link from "next/link"
export default function Home() {
  return (
    <div >
      <main>
        <ul className="flex gap-3 my-4 items-center justify-center w-full">
          <li><Link href="/characters">Characters</Link></li>
          <li><Link href="/locations">Locations</Link></li>
          <li><Link href="/episodes">Episodes</Link></li>
        </ul>
      </main>
    </div>
  );
}
