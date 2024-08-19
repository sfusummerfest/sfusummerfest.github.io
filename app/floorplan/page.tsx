import floorplan2024 from '@/public/images/2024_SummerFest_Public_Floorplan.webp';

export const metadata = {
    title: 'Summerfest Floorplan',
    description: 'View the Summerfest 2024 floorplan.',
};

export default function Floorplan() {
    return (
        <article className='md:max-w-screen-xl mx-auto px-4 pt-24 pb-20'>
            <header className="border-b-2 border-stone-950 sm:text-center my-10 pb-8">
                <h2 className="text-4xl font-bold text-stone-950">
                    Summerfest 2024 Floorplan
                </h2>
                <p className="text-lg text-stone-700">
                    <a
                        href="https://www.google.com/maps/place/SE16,+3700+Willingdon+Ave,+Burnaby,+BC+V5G+3H2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-red hover:underline"
                    >
                        3700 Willingdon Ave SE16, Burnaby, BC V5G 3H2
                    </a>
                </p>
            </header>
            <div className="relative w-full flex flex-col items-center">
                <div className="w-full aspect-[16/9] bg-gray-200">
                    <img
                        src={floorplan2024.src}
                        alt="Summerfest 2024 Floorplan"
                        className="w-full h-full object-contain"
                    />
                </div>
                <a
                    href={floorplan2024.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-primary-red hover:underline text-base lg:text-lg"
                >
                    Open Image in New Tab
                </a>
            </div>
        </article>
    );
}
