import "@fortawesome/fontawesome-free/js/all.min";
import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/logos/the-summer-festival.png"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between space-y-8">
      <header className="relative h-screen w-full">
        <div className="absolute top-0 left-0 w-full h-full" id="home-bg-video-container">
          <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/3FAz7KMoKrA?autoplay=1&controls=0&rel=0&playsinline=1&enablejsapi=1&loop=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="max-w-4xl">
            <Image src={logoImage} alt="Logo of The Summer Festival presented by SFU Anime" unoptimized></Image>
          </div>
          <Link href="#home-main"><button className="border-white border-4 rounded-full py-4 px-8 bg-[#DB796D] hover:bg-[#FFA266] focus:bg-[#FFA266] active:bg-[#FFA266] text-white font-bold">Enter</button></Link>
        </div>
      </header>
    </div>
  )
}
