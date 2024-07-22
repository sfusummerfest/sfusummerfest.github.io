import Image from 'next/image';
import hobbyBee from '@/public/images/sponsors/hobby-bee-logo.webp';
import konbiniya from '@/public/images/sponsors/konbiniya.webp';
import mouseCollectibles from '@/public/images/sponsors/mouse-collectibles.webp';
import nimbasa from '@/public/images/sponsors/Nimbasa.webp';
import sakuraMedia from '@/public/images/sponsors/sakura-media-logo.webp';

const sponsors = [
    { src: hobbyBee, alt: 'Hobby Bee' },
    { src: konbiniya, alt: 'Konbiniya' },
    { src: mouseCollectibles, alt: 'Mouse Collectibles' },
    { src: nimbasa, alt: 'Nimbasa' },
    { src: sakuraMedia, alt: 'Sakura Media' },
];

export default function Sponsors() {
    return (
        <section className="mx-4 pb-32 ">
            <h2 className="text-4xl font-bold mb-6 text-center text-stone-950 border-b-2 border-stone-950 pb-2">Our Sponsors</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mix-blend-multiply">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center p-2 ">
                        <Image
                            src={sponsor.src}
                            alt={sponsor.alt}
                            width={160}
                            height={160}
                            className="object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
