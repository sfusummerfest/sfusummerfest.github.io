import Image from 'next/image';
import hobbyBee from '@/public/images/sponsors/hobby-bee-logo.webp';
import konbiniya from '@/public/images/sponsors/konbiniya.webp';
import mouseCollectibles from '@/public/images/sponsors/mouse-collectibles.webp';
import nimbasa from '@/public/images/sponsors/Nimbasa.webp';
import sakuraMedia from '@/public/images/sponsors/sakura-media-logo.webp';
import TokyoTreatSvg from '@/components/TokyoTreatSvg';

const sponsors = [
    { component: TokyoTreatSvg, isSvg: true, alt: 'Tokyo Treat SVG', link: 'https://tokyotreat.com/' },
    { src: hobbyBee, alt: 'Hobby Bee' },
    { src: konbiniya, alt: 'Konbiniya' },
    { src: mouseCollectibles, alt: 'Mouse Collectibles' },
    { src: nimbasa, alt: 'Nimbasa' },
    { src: sakuraMedia, alt: 'Sakura Media' },
];

export default function Sponsors() {
    return (
        <section className="max-w-4xl mx-auto pb-32">
            <h2 className="mx-4 text-4xl font-bold mb-3 text-center text-stone-950 border-b-2 border-stone-950 pb-4">
                Our Sponsors
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 ">
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
