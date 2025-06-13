"use client"
import Link from "next/link";
import  { usePathname} from "next/navigation"
const NavBar = () => {
  const pathName = usePathname();
  const activeLinkClass = "text-black hover:text-[#DD3A0A]";
  const inactiveLinkClass = "text-[#2C764C] hover:text-[#DD3A0A]"
  return (
    <nav>
      <ul className="shadow-md py-6 flex gap-10 items-center justify-center w-full text-4xl font-extrabold text-[#2C764C] bg-[#EB862D]">
          <li><Link href="/" className="hover:text-[#DD3A0A]">Home</Link></li>
          <li><Link href="/characters" className={pathName === '/characters' ? activeLinkClass : inactiveLinkClass}>Characters</Link></li>
          <li><Link href="/locations" className={pathName === '/locations' ? activeLinkClass : inactiveLinkClass}>Locations</Link></li>
          <li><Link href="/episodes" className={pathName === '/episodes' ? activeLinkClass : inactiveLinkClass}>Episodes</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
