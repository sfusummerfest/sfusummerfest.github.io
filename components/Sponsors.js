import Image from 'next/image';
import hobbyBee from '@/public/images/sponsors/hobby-bee-logo.webp';
import konbiniya from '@/public/images/sponsors/konbiniya.webp';
import mouseCollectibles from '@/public/images/sponsors/mouse-collectibles.webp';
import nimbasa from '@/public/images/sponsors/Nimbasa.webp';
import sakuraMedia from '@/public/images/sponsors/sakura-media-logo.webp';
import TokyoTreatSvg from '@/components/TokyoTreatSvg';
import plamod from '@/public/images/sponsors/plamod.webp';
import sfss from '@/public/images/sponsors/SFSS_COLOR_LOGO.webp';
import studioSIAT from '@/public/images/sponsors/SFU_SIAT_logo.png';

const sponsors = [
    { src: hobbyBee, alt: 'Hobby Bee Canada', link: 'https://hobby-bee.com/' },
    { src: mouseCollectibles, alt: 'Mouse Collectibles' },
    { src: nimbasa, alt: 'Nimbasa Entertainment', link: 'https://nimbasa.co/' },
    { src: sakuraMedia, alt: 'Sakura Media', link: 'https://www.instagram.com/sakuramediametro/' },
    { src: studioSIAT, alt: 'StudioSIAT', link: 'http://www.sfu.ca/siat/studiosiat.html'},
    { src: sfss, alt: 'Simon Fraser Student Society', link: 'https://sfss.ca/'}
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

