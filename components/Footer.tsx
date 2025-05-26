import ExportedImage from "next-image-export-optimizer";
import SocMedBar from "@/components/SocMedBar";
import logoImage from "@/public/images/logos/the-summer-festival.webp"
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="bg-stone-950 w-full"
        >
            <div className="px-5 py-8 md:mx-auto">

                <div className="flex flex-col items-center">
                    <section className="max-w-40 lg:max-w-xs mb-5">
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

                    <div className="border-2 border-primary-yellow w-40 my-8">
                    </div>

                    <ul className="text-white flex gap-x-3.5">
                        <li>
                            <Link href={"/"} className="hover:text-primary-yellow duration-200">
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link href={""} className="hover:text-primary-yellow duration-200">
                                Contact Us
                            </Link>
                        </li> */}
                        <li>
                            <Link href={"/#about"} className="hover:text-primary-yellow duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={"/faq"} className="hover:text-primary-yellow duration-200">
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <section className="space-x-2 text-white text-xl py-12">
                        <SocMedBar></SocMedBar>
                    </section>
                    <section>
                        <p className="text-gray-500 text-sm font-semibold">
                            &copy; SFU Summer Festival 2024
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    );
}