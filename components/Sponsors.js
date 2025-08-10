import Image from 'next/image';
import resist from '@/public/images/sponsors/Logo_Thick_Large_X_RED_v02.png';
import fantuan from '@/public/images/sponsors/Fantuan.png'
import hobbyBee from '@/public/images/sponsors/hobby-bee-logo.webp';
import huion from '@/public/images/sponsors/Huion_current_logo_vertical_arrangement.svg.png'
import konbiniya from '@/public/images/sponsors/konbiniya.webp';
import mouseCollectibles from '@/public/images/sponsors/mouse-collectibles.webp';
import nimbasa from '@/public/images/sponsors/Nimbasa.webp';
import sakuraMedia from '@/public/images/sponsors/sakura-media-logo.webp';
import TokyoTreatSvg from '@/components/TokyoTreatSvg';
import plamod from '@/public/images/sponsors/plamod.webp';
import sfss from '@/public/images/sponsors/SFSS_COLOR_LOGO.webp';
import studioSIAT from '@/public/images/sponsors/SFU_SIAT_logo.png';
import sunsetStudios from '@/public/images/sponsors/Sunsetvisitor_Logo_Horizontal_Black.webp'
import treehouseToys from '@/public/images/sponsors/New-Toys-logo-1_03.png'
import turtleKeebs from '@/public/images/sponsors/Turtle_Keebs.png'
import yakg from '@/public/images/sponsors/YAKG.png';

const sponsors = [
    { src: fantuan, alt: 'Fantuan', link: 'https://fantuan.ca/en/'},
    { src: hobbyBee, alt: 'Hobby Bee Canada', link: 'https://hobby-bee.com/' },
    { src: huion, alt: 'Huion', link: 'https://store.huion.com/ca/?gad_source=1&gad_campaignid=21263945663&gbraid=0AAAAAqns4SYxQbJGVMY5vJmiKV-KOfd6e&gclid=CjwKCAjwwNbEBhBpEiwAFYLtGOKR3y28gwkhIEtoMWqG3-W353IWYljZe5Jo5z8Om-kVSVFRaSrLBhoCZ1MQAvD_BwE'},
    { src: mouseCollectibles, alt: 'Mouse Collectibles' },
    { src: nimbasa, alt: 'Nimbasa Entertainment', link: 'https://nimbasa.co/' },
    { src: resist, alt: '1000xResist', link: 'https://store.steampowered.com/app/1675830/1000xRESIST/'},
    { src: sakuraMedia, alt: 'Sakura Media', link: 'https://www.instagram.com/sakuramediametro/' },
    { src: studioSIAT, alt: 'StudioSIAT', link: 'http://www.sfu.ca/siat/studiosiat.html'},
    { src: sunsetStudios, alt: 'Sunset Studios', link: 'https://www.sunsetvisitor.studio/'},
    { src: sfss, alt: 'Simon Fraser Student Society', link: 'https://sfss.ca/'},
    { src: treehouseToys, alt: 'Treehouse Toys', link: 'https://treehousetoys.ca/'},
    { src: turtleKeebs, alt: 'Turtle Keebs', link: 'https://turtlekeebs.com/?srsltid=AfmBOoptKw6BsY3o1RStQCzDC9bi3WqShBkoK62NeppXeDxiLEtyZOIA'},
    { component: TokyoTreatSvg, isSvg: true, alt: 'Tokyo Treat', link: 'https://tokyotreat.com/?srsltid=AfmBOooVLxp5ogXvBqVv777hN3fs1GBAZ_RGshxwpAJIhv6glK4TMVWD'},
    { src: yakg, alt: 'Yet Another Killing Game', link: 'https://linktr.ee/yakg'},
    // { src: plamod, alt: 'Plamod Distributors Inc', link: 'https://www.instagram.com/plamod_official/' },

];

export default function Sponsors() {
    return (
        <section className="max-w-4xl mx-auto pb-32">
            <h2 className="mx-4 text-4xl font-bold mb-3 text-center text-stone-950 border-b-2 border-stone-950 pb-4">
                Our Sponsors
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  justify-center items-center">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center items-center p-4">
                        {sponsor.isSvg ? (
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <sponsor.component className="w-40 h-40" />
                            </a>
                        ) : sponsor.link ? (
                            <a
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                            >
                                <Image
                                    src={sponsor.src}
                                    alt={sponsor.alt}
                                    width={160}
                                    height={160}
                                    className="object-contain mix-blend-multiply"
                                    loading="lazy"
                                />
                            </a>
                        ) : (
                            <Image
                                src={sponsor.src}
                                alt={sponsor.alt}
                                width={160}
                                height={160}
                                className="object-contain mix-blend-multiply"
                                loading="lazy"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

