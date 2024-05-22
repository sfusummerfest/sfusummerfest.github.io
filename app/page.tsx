import "@fortawesome/fontawesome-free/js/all.min";
import Link from "next/link";

import logoImage from "@/public/images/logos/the-summer-festival.webp"
import ExportedImage from "next-image-export-optimizer";
import SocMedBar from "@/components/SocMedBar";
import fireworkIcon from "@/public/images/firework.webp";
import Natsuko from "@/public/images/natsuko.webp";
import PaperFanIcon from "@/public/images/paper-fan.webp";
import RenAyumi from "@/public/images/ren-ayumi.webp";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen
        space-y-8"
    >
      <header className="h-screen relative w-full">
        <div
          className="absolute video-background h-full w-full overflow-hidden"
          id="home-bg-video-container"
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture; web-share"
            allowFullScreen
            src="https://www.youtube.com/embed/3FAz7KMoKrA?si=RXYW2BWo_88rEV-Y&hd=1&rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=3FAz7KMoKrA"
            title="YouTube video player"
          ></iframe>
        </div>
        <div
          className="fade-in-overlay absolute bg-black h-full left-0 opacity-70 top-0 w-full"
        ></div>
        <div
          className="absolute flex flex-col gap-y-4 h-full items-center justify-center
            left-0 top-0 w-full"
        >
          <div className="max-w-4xl">
            <ExportedImage
              alt="Logo of The Summer Festival presented by SFU Anime"
              src={logoImage}
              priority
            ></ExportedImage>
          </div>
          <div className="text-white text-lg font-semibold mx-3 text-center mb-3">
            <h1>
              September 7th  •  1:30 pm - 8:00 pm  •  3700 Willingdon Avenue
            </h1>
          </div>
          <Link href="/">
            <button
              className="
                active:text-primary-red hocus:-translate-y-1 transition-all bg-primary-yellow
                font-bold px-4 py-2 duration-300 ease-in-out
                rounded-full text-black flex items-center gap-x-5 group"
            >
              <img src={fireworkIcon.src} alt="Firework icon" className="h-12 w-12 transition-transform duration-300 group-hover:rotate-45" />
              <span className="text-lg">Artist and Vendor Signup</span>
            </button>
          </Link>
        </div>
      </header>

      <section className="md:max-w-screen-2xl px-5 md:px-0 grid grid-cols-4 gap-x-4 pt-24">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-6 inline-flex items-center">
            What is the Summer Festival?
            <img src={PaperFanIcon.src} alt="Paper fan icon" className="ml-4 max-h-14" />
          </h2>
          <p className="text-lg mb-6">
            The Summer Festival is a one-day, free to attend anime convention in the style of a Japanese ‘Matsuri’ festival held right in Metro Vancouver! While traditionally held on SFU’s Burnaby Mountain campus, SFU Anime has collaborated with BCIT Anime to host the event in BCIT’s Burnaby campus for 2024.
          </p>
          <p className="text-lg">
            At the festival itself you can find a variety of festival games, as well as, booths hosted by local artists and vendors selling hand-made art and various other goods. When you get hungry you will find a host of local food vendors cooking up fresh and delicious treats which you can enjoy along with stage performances and panels throughout the event.
          </p>
        </div>
        <div className="flex justify-center col-span-2">
          <img src={Natsuko.src} alt="Natsuko" className="h-min" />
        </div>
      </section>

      <section className="w-full md:max-w-screen-2xl px-5 md:px-0 grid grid-cols-4 gap-x-4 py-24">

        <div className="col-span-2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-10 inline-flex items-center col-span-full">
            When is the Summer Festival?
            <img src={fireworkIcon.src} alt="Firework Icon" className="ml-4 max-h-14" />
          </h2>
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <img src={RenAyumi.src} alt="Ren Ayumi" className="h-min" />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-bold mb-2">
                Date & Hours
              </h3>
              <p className="text-lg">
                September 7th
              </p>
              <p className="text-lg">
                1:30 pm to 8:00 pm
              </p>
              <h3 className="text-2xl font-bold mt-6 mb-2">
                Event Location
              </h3>
              <p className="text-lg">
                BCIT's Burnaby Campus
              </p>
              <p className="text-lg">
                3700 Willingdon Avenue
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.9241972913957!2d-123.00332618431946!3d49.24880927932766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486770f1e0af3c1%3A0x1e3dfd9f81966026!2sBritish%20Columbia%20Institute%20of%20Technology%20(BCIT)%20Burnaby%20Campus!5e0!3m2!1sen!2sca!4v1626276243721!5m2!1sen!2sca"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer
        className="bg-black w-full"
      >
        <div className="px-5 py-10 md:max-w-screen-2xl md:mx-auto">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="flex flex-col">
              <section className="max-w-xs mb-5">
                <ExportedImage
                  alt="Logo of The Summer Festival presented by SFU Anime"
                  src={logoImage}
                ></ExportedImage>
              </section>
              <section className="text-white">
                BCIT Burnaby Campus
              </section>
              <section className="text-white">
                3700 Willingdon Avenue
              </section>
              <section className="space-x-2 text-white text-xl py-10">
                <SocMedBar></SocMedBar>
              </section>
            </div>

            <div className="flex self-center">
              <ul className="text-white">
                <li>
                  <Link href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <section>
            <p className="text-gray-500 text-xs">
              &copy; SFU Summer Festival 2022-2024
            </p>
          </section>
        </div>
      </footer>
    </div>
  )
}
