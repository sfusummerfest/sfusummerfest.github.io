import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import LogoImage from "@/public/images/logos/the-summer-festival.png"
import SocMedBar from "@/components/SocMedBar";

export const NewHomePage = () =>
  <>
    <div className="flex flex-col items-center min-h-screen space-y-2">
      <header className="flex items-center justify-stretch w-full">
        <div className="flex flex-grow-0 items-center justify-start max-w-32">
          <ExportedImage
            alt="Logo of The Summer Festival presented by SFU Anime"
            src={LogoImage}
            priority
          ></ExportedImage>
        </div>
        <nav className="flex flex-grow items-center justify-end space-x-8 pr-4">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/artists">Artist Alley</Link>
          <Link href="/floor">Floor Plan</Link>
          <Link href="/stage">Stage Schedule</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center pb-16 space-y-16 w-full">
        <section className="h-[50vh] relative w-full">
          <div
            className="absolute h-full left-0 top-0 w-full"
            id="home-bg-video-container"
          >
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                      gyroscope; picture-in-picture; web-share"
              allowFullScreen
              height="100%"
              src={"https://www.youtube.com/embed/videoseries" +
                "?autoplay=1&controls=0&list=PLSTh59A_fKDPiLM40AURyxLslgio8N7Ds" +
                "&loop=1&si=3GPJuyHFO1xmB1ap"}
              title="YouTube video player"
              width="100%"
            ></iframe>
          </div>
          <div
            className="absolute bg-black h-full left-0 opacity-70 top-0 w-full"
          ></div>
          <div
            className="absolute flex flex-col h-full items-center justify-center
                    left-0 top-0 w-full"
          >
            <div className="max-w-4xl">
              <ExportedImage
                alt="Logo of The Summer Festival presented by SFU Anime"
                src={LogoImage}
                priority
              ></ExportedImage>
            </div>
          </div>
        </section>
        <section className="flex justify-around space-x-4 w-3/4">
          {[
            { "text": "Event Info" },
            { "text": "Policies" },
            { "text": "Artist Alley" },
            { "text": "Stage Schedule" },
            { "text": "Floor Plan" },
            { "text": "FAQ" },
          ].map(entry =>
            <div
              className="bg-[#BDE3FF] border-primary-red flex flex-col
                items-center justify-between py-8 px-16 rounded-lg space-y-8"
              key={entry.text.replaceAll(" ", "-").toLowerCase()}
            >
              <img
                src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
                width="128px" height="128px"
              ></img>
              <span className="bg-black hover:cursor-pointer p-4 rounded-lg
                text-white whitespace-nowrap">
                {entry.text}
              </span>
            </div>
          )}
        </section>
        <hr className="w-1/4"></hr>
        <section
          className="flex flex-col items-center justify-between space-y-8
            w-full"
        >
          <span className="text-6xl">Sponsors</span>
          <div className="flex justify-around space-x-4 w-3/4">
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
            <img
              src="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
              width={256} height={256}
            ></img>
          </div>
        </section>
      </main>
      <footer
        className="bg-black flex flex-col items-center justify-between p-8
        space-y-8 text-white w-full"
      >
        <div className="flex items-start justify-between space-x-4 w-full">
          <section className="flex flex-col flex-grow space-y-4 text-xl">
            <div>Stay connected!</div>
            <section className="space-x-2">
              <SocMedBar></SocMedBar>
            </section>
          </section>
          <section className="px-16">
            <div className="font-bold text-2xl">Policies</div>
            <div>
              <ul>
                <li>Code of Conduct</li>
                <li>Prop Weapon Policy</li>
                <li>Violence and Sexual Harassment Policy</li>
                <li>Liability Release and Waiver Agreement</li>
                <li>Parent or Guardian's Additional Release for Minors</li>
              </ul>
            </div>
          </section>
          <section className="px-16">
            <div className="font-bold text-2xl">Summerfest</div>
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Natsuko</li>
            </ul>
          </section>
        </div>
        <div>
          <p className="text-gray-500 text-xs">
            &copy; SFU Summer Festival 2022-2023
          </p>
        </div>
      </footer>
    </div>
  </>

export default NewHomePage
