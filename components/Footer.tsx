import ExportedImage from "next-image-export-optimizer";
import SocMedBar from "@/components/SocMedBar";
import logoImage from "@/public/images/logos/the-summer-festival.webp"
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="bg-black w-full"
        >
            <div className="px-5 py-14 md:max-w-screen-2xl md:mx-auto">

                <div className="flex flex-col items-center">
                    <section className="max-w-52 lg:max-w-xs mb-5">
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

                    <div className="border border-primary-yellow w-40 my-10">
                    </div>

                    <ul className="text-white flex gap-x-3.5">
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
                            <Link href={"/#about"}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <section className="space-x-2 text-white text-xl py-12">
                        <SocMedBar></SocMedBar>
                    </section>
                    <section>
                        <p className="text-gray-500 text-xs">
                            &copy; SFU Summer Festival 2022-2024
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    );
}