import "@fortawesome/fontawesome-free/js/all.min";
import Link from "next/link";

import logoImage from "@/public/images/logos/the-summer-festival.png"
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen
        space-y-8"
    >
      <header className="h-screen relative w-full">
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
              src={logoImage}
              priority
            ></ExportedImage>
          </div>
          <Link href="#home-main">
            <button
              className="active:bg-primary-purple active:border-primary-yellow
                active:text-primary-yellow bg-primary-red border-4
                border-white font-bold hocus:bg-primary-purple
                hocus:border-primary-yellow hocus:text-primary-yellow px-8
                py-4 rounded-full text-white"
            >Enter</button>
          </Link>
        </div>
      </header>
      <main className="max-w-screen-lg px-2 space-y-4" id="home-main">
        <section
          className="border-4 border-primary-red p-2 rounded-xl space-y-4"
        >
          <div>
            <h2 className="font-bold text-3xl text-primary-red">
              <i className="fa-circle-info fa-solid"></i>&nbsp;
              Important information regarding SFU Summer Festival 2023
            </h2>
            <hr />
          </div>
          <div className="leading-normal space-y-2 text-lg">
            <p>
              Hello everyone, we, unfortunately, have some difficult news to
              share with you all.
            </p>
            <p>
              Due to challenges presented with preparations and regulatory
              requirements, we will <b>not</b> be hosting the SFU Summer
              Festival for 2023. We understand that this is something that many
              regular attendees have been looking forward to, it is a long-
              standing tradition for us as a club and it hurts us to be put into
              a situation where we cannot foresee running the event this year.
            </p>
            <p>
              However, this is not the end for SummerFest, even though we do not
              plan to run the event this year, we are looking to ensure that it
              will happen next year for 2024. Many of our concerns for this
              year&apos;s SummerFest lie in newfound limitations, accessibility,
              and complications in ensuring a safe venue space. We plan to take
              a year to reevaluate our event plan, layout, and location and
              anticipate significant changes in the coming festivals.
            </p>
            <p>
              A main concern for us is that we do not wish to bring something
              that would not meet the same standards as in previous years&apos;
              festivals. Last year saw a fantastic turnout and it welcomed many
              new people to the landscape, and we wish to ensure that we can
              keep striving for something more, to keep growing, instead of
              taking a step back.
            </p>
            <p>
              We from the SFU Summer Festival Committee sincerely apologize to
              all of you who were looking forward to this year&apos;s event, and
              we thank you all for your understanding of this situation.
            </p>
            <p className="text-right">
              - SFU Summer Festival Planning Committee
            </p>
          </div>
        </section>
        <section
          className="border-4 border-primary-red p-2 rounded-xl space-y-4"
        >
          <div>
            <h2 className="font-bold text-3xl text-primary-red">
              <i className="fa-brands fa-square-youtube"></i>&nbsp;
              SFU Summer Festival 2022 VOD
            </h2>
            <hr />
          </div>
          <div className="h-full w-full">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
              allowFullScreen
              height="576px"
              src="https://www.youtube.com/embed/vAZB4xjWcdc"
              title="YouTube video player"
              width="100%"
            ></iframe>
          </div>
        </section>
      </main>
      <footer
        className="bg-primary-dark flex flex-col items-center justify-between
          space-y-8 w-full"
      >
        <section className="max-w-xs">
          <ExportedImage
            alt="Logo of The Summer Festival presented by SFU Anime"
            src={logoImage}
          ></ExportedImage>
        </section>
        <section className="space-x-2 text-white text-xl">
          <Link href="https://www.facebook.com/sfusummerfest">
            <span className="bg-brand-facebook p-3 rounded-md">
              <i className="fa-brands fa-facebook"></i>
            </span>
          </Link>
          <Link href="https://www.twitter.com/SFUSummerFest">
            <span className="bg-brand-twitter p-3 rounded-md">
              <i className="fa-brands fa-twitter"></i>
            </span>
          </Link>
          <Link href="https://www.instagram.com/sfusummerfest">
            <span className="bg-brand-instagram p-3 rounded-md">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </Link>
          <Link href="https://www.twitch.tv/sfusummerfest">
            <span className="bg-brand-twitch p-3 rounded-md">
              <i className="fa-brands fa-twitch"></i>
            </span>
          </Link>
          <Link href="https://www.youtube.com/channel/UCioH5wqn7VSG0valSMrD5VA">
            <span className="bg-brand-youtube p-3 rounded-md">
              <i className="fa-brands fa-youtube"></i>
            </span>
          </Link>
          <Link href="https://www.discord.gg/sfuanime">
            <span className="bg-brand-discord p-3 rounded-md">
              <i className="fa-brands fa-discord"></i>
            </span>
          </Link>
        </section>
        <section>
          <p className="text-gray-500 text-xs">
            &copy; SFU Summer Festival 2022-2023
          </p>
        </section>
      </footer>
    </div>
  )
}
