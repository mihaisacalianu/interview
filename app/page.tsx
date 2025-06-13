import Image from "next/image"
export default function Home() {
  return (
    <div >
      <main className="w-[100dvw] h-[100dvh] mx-auto flex flex-col">
        <Image src="/mainBg.png" alt="hero image with ricky and morty" width={1000} height={1000} className="w-[100dvw] h-[100dvh]" priority/>
      </main>
    </div>
  );
}
