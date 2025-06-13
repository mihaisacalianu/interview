"use client"
import Link from "next/link";
import  { usePathname} from "next/navigation"
const NavBar = () => {
  const pathName = usePathname();
  const activeLinkClass = "text-[#DD3A0A] hover:text-[#DD3A0A]";
  const inactiveLinkClass = "text-[#2C764C] hover:text-[#DD3A0A]"
  return (
    <nav className="sticky top-0 shadow-md bg-[#EB862D]">
      <ul className="py-6 flex gap-10 items-center justify-center w-full text-4xl font-extrabold text-[#2C764C] ">
          <li><Link href="/" className={pathName === '/' ? activeLinkClass : inactiveLinkClass}>Home</Link></li>
          <li><Link href="/characters" className={pathName === '/characters' ? activeLinkClass : inactiveLinkClass}>Characters</Link></li>
          <li><Link href="/locations" className={pathName === '/locations' ? activeLinkClass : inactiveLinkClass}>Locations</Link></li>
          <li><Link href="/episodes" className={pathName === '/episodes' ? activeLinkClass : inactiveLinkClass}>Episodes</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
