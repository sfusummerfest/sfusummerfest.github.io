import "@fortawesome/fontawesome-free/js/all.min";
import Link from "next/link";

import logoImage from "@/public/images/logos/summer-festival-logo-2024.webp"
import ExportedImage from "next-image-export-optimizer";

import blossoms1 from "@/public/images/blossoms-1.webp";
import blossoms2 from "@/public/images/blossoms-2.webp";
import fireworkIcon from "@/public/images/firework.webp";
import Natsuko from "@/public/images/natsuko.webp";
import PaperFanIcon from "@/public/images/paper-fan.webp";
import RenAyumi from "@/public/images/ren-ayumi.webp";

import Sponsors from "@/components/Sponsors";


export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen
        space-y-8 bg-stone-50"
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
          <div className="max-w-2xl">
            <ExportedImage
              alt="Logo of The Summer Festival presented by SFU Anime"
              src={logoImage}
              priority
              className="pl-3"
            ></ExportedImage>
          </div>
          <div className="text-white text-lg font-semibold mx-3 text-center mb-3">
            <h1>
              September 7th  •  1:30 pm - 8:00 pm  •  3700 Willingdon Avenue
            </h1>
          </div>
          {/* <Link href="https://u.sfuani.me/SFestVendorRegistrationTableForm" target="_blank">
            <button
              className="
                active:text-primary-red hocus:-translate-y-1 transition-all bg-primary-yellow
                font-bold px-4 py-2 duration-300 ease-in-out
                rounded-full text-black flex items-center gap-x-5 group"
            >
              <img src={fireworkIcon.src} alt="Firework icon" className="h-12 w-12 transition-transform duration-300 group-hover:rotate-45" />
              <span className="text-lg">Artist and Vendor Signup</span>
            </button>
          </Link> */}
        </div>
      </header>

      <article className="relative w-full" id="about">
        <section className="md:max-w-screen-xl mx-auto grid grid-cols-4 gap-4 px-4 lg:pt-24">
          <div className="col-span-full lg:col-span-2 lg:row-start-1 z-20">
            <h2 className="text-4xl font-bold mb-6 flex lg:items-center lg:flex-row text-stone-950">
              What is the Summer Festival?
              <img src={PaperFanIcon.src} alt="Paper fan icon" className="ml-4 h-auto max-w-16 object-contain" />
            </h2>
            <p className="text-base lg:text-lg mb-6">
              The Summer Festival is a one-day, <b>free to attend</b> anime convention in the style of a Japanese ‘Matsuri’ festival held right in Metro Vancouver! While traditionally held on SFU’s Burnaby Mountain campus, SFU Anime has collaborated with BCIT Anime to host the event in BCIT’s Burnaby campus for 2024.
            </p>
            <p className="text-base lg:text-lg">
              At the festival itself you can find a variety of festival games, as well as, booths hosted by local artists and vendors selling hand-made art and various other goods. When you get hungry you will find a host of local food vendors cooking up fresh and delicious treats which you can enjoy along with stage performances and panels throughout the event.
            </p>
          </div>
          <div className="flex justify-center row-start-2 col-span-full lg:row-start-1 lg:col-span-2 z-10">
            <img src={Natsuko.src} alt="Natsuko" className="max-w-xs lg:max-w-full lg:h-min" />
          </div>
        </section>
        <div
          className="absolute top-0 right-0 w-full md:w-4/5 lg:w-full h-full bg-contain object-contain bg-no-repeat opacity-15 z-0 rotate-180"
          style={{ backgroundImage: `url(${blossoms1.src})`, backgroundPosition: '-72px 0' }}
        >
        </div>
      </article>

      <article className="relative w-full">
        <section className="md:max-w-screen-xl mx-auto grid grid-cols-4 gap-4 px-4 lg:pt-24 mb-24">
          <div className="col-span-full lg:col-span-2 flex flex-col justify-center z-20">
            <h2 className="text-4xl font-bold mb-6 flex lg:items-center lg:flex-row text-stone-950">
              When is the Summer Festival?
              <img src={fireworkIcon.src} alt="Firework Icon" className="ml-4 h-auto max-w-14 object-contain" />
            </h2>
            <div className="flex items-center flex-row-reverse">
              <div className="w-1/2">
                <img src={RenAyumi.src} alt="Ren Ayumi" className="h-auto object-contain" />
              </div>
              <div className="w-1/2">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Date & Hours
                </h3>
                <p className="text-base lg:text-lg">
                  September 7th
                </p>
                <p className="text-base lg:text-lg">
                  1:30 pm to 8:00 pm
                </p>
                <h3 className="text-xl lg:text-2xl font-bold mt-6 mb-2">
                  Event Location
                </h3>
                <p className="text-base lg:text-lg">
                  BCIT&apos;s Burnaby Campus
                </p>
                <p className="text-base lg:text-lg">
                  3700 Willingdon Avenue
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-span-full row-start-2 lg:row-start-1 lg:col-start-3 lg:col-span-2 pt-8 lg:pt-0 h-96 z-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.3555300242944!2d-123.00071565098887!3d49.248607388675794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676e1e37125a3%3A0xcef19ec766ed7764!2sBCIT%20Recreation%20Services!5e0!3m2!1sen!2sca!4v1724094950121!5m2!1sen!2sca"
              width="100%"
              className="w-full lg:pl-20"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <div
          className="absolute top-0 left-0 w-full md:w-4/5 lg:w-full h-full bg-contain object-contain bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: `url(${blossoms2.src})`, backgroundPosition: '-72px ' }}
        ></div>
      </article>

      <Sponsors />

    </div>
  )
}
