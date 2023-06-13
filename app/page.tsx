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
      <main className="max-w-screen-lg px-2 space-y-4" id="home-main">
        <section className="p-2 text-[#DB796D] border-[#DB796D] border-4 rounded-xl space-y-4">
          <div>
            <h2 className="text-3xl font-bold">
              <i className="fa-solid fa-circle-info"></i>&nbsp;
              Important information regarding SFU Summer Festival 2023
            </h2>
            <hr/>
          </div>
          <div className="text-lg leading-normal space-y-2">
            <p>
              Hello everyone, we, unfortunately, have some difficult news to share with you all.
            </p>
            <p>
              Due to challenges presented with preparations and regulatory requirements, we will not be hosting the SFU Summer Festival for 2023.
              We understand that this is something that many regular attendees have been looking forward to, it is a long-standing tradition for us as a club and it hurts us to be put into a situation where we cannot foresee running the event this year.
            </p>
            <p>
              However, this is not the end for SummerFest, even though we do not plan to run the event this year, we are looking to ensure that it will happen next year for 2024.
              Many of our concerns for this year&apos;s SummerFest lie in newfound limitations, accessibility, and complications in ensuring a safe venue space.
              We plan to take a year to reevaluate our event plan, layout, and location and anticipate significant changes in the coming festivals.
            </p>
            <p>
              A main concern for us is that we do not wish to bring something that would not meet the same standards as in previous years&apos; festivals.
              Last year saw a fantastic turnout and it welcomed many new people to the landscape, and we wish to ensure that we can keep striving for something more, to keep growing, instead of taking a step back.
            </p>
            <p>
              We from the SFU Summer Festival Committee sincerely apologize to all of you who were looking forward to this year&apos;s event, and we thank you all for your understanding of this situation.
            </p>
            <p>
              - SFU Summer Festival Planning Committee
            </p>
          </div>
        </section>
        <section className="p-2 text-[#DB796D] border-[#DB796D] border-4 rounded-xl space-y-4">
          <div>
            <h2 className="text-3xl font-bold">
              <i className="fa-brands fa-square-youtube"></i>&nbsp;
              SFU Summer Festival 2022 VOD
            </h2>
            <hr/>
          </div>
          <div className="w-full h-[576px]">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vAZB4xjWcdc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[#351211] flex flex-col items-center justify-between space-y-8">
        <section className="max-w-xs">
          <Image src={logoImage} alt="Logo of The Summer Festival presented by SFU Anime" unoptimized></Image>
        </section>
        <section className="text-white text-xl space-x-2">
          <Link href="https://www.facebook.com/sfusummerfest">
            <span className="p-3 bg-[#3B5998] rounded-md">
              <i className="fa-brands fa-facebook"></i>
            </span>
          </Link>
          <Link href="https://www.twitter.com/SFUSummerFest">
            <span className="p-3 bg-[#1DA1F2] rounded-md">
              <i className="fa-brands fa-twitter"></i>
            </span>
          </Link>
          <Link href="https://www.instagram.com/sfusummerfest">
            <span className="p-3 bg-[#262626] rounded-md">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </Link>
          <Link href="https://www.twitch.tv/sfusummerfest">
            <span className="p-3 bg-[#6441A5] rounded-md">
              <i className="fa-brands fa-twitch"></i>
            </span>
          </Link>
          <Link href="https://www.youtube.com/channel/UCioH5wqn7VSG0valSMrD5VA">
            <span className="p-3 bg-[#CD201F] rounded-md">
              <i className="fa-brands fa-youtube"></i>
            </span>
          </Link>
          <Link href="https://www.discord.gg/sfuanime">
            <span className="p-3 bg-[#7289DA] rounded-md">
              <i className="fa-brands fa-discord"></i>
            </span>
          </Link>
        </section>
        <section>
          <p className="text-xs text-gray-500">&copy; SFU Summer Festival 2022-2023</p>
        </section>
      </footer>
    </div>
  )
}
