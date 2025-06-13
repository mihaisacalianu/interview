import Image from "next/image"
export default function Home() {
  return (
    <main className="w-dvw h-dvh mx-auto flex flex-col">
      <Image src="/mainBg.png" alt="hero image with ricky and morty" width={1000} height={1000} className="w-dvw h-[calc(100dvh-88px)]" priority/>
    </main>
  );
}
