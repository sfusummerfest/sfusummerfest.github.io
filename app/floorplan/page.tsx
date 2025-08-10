import floorplan2025 from '@/public/images/2025_SummerFest_Public_Floorplan.webp';

export const metadata = {
    title: 'Summerfest Floorplan',
    description: 'View the Summerfest 2025 floorplan.',
};

export default function Floorplan() {
    return (
        <article className='md:max-w-screen-2xl mx-auto px-4 pt-16 pb-20'>
            <header className="border-b-2 border-stone-950 sm:text-center my-10 pb-8">
                <h2 className="text-4xl font-bold text-stone-950">
                    Summerfest 2025 Floorplan
                </h2>
                <p className="text-lg text-stone-700">
                    8888 University Drive, Burnaby, BC V5A 1S6
                </p>
            </header>
            <div className="relative w-full flex flex-col items-center">
                <div className="w-full aspect-[16/9] bg-gray-200">
                    <img
                        src={floorplan2025.src}
                        alt="Summerfest 2025 Floorplan"
                        className="w-full h-full object-contain"
                    />
                </div>
                <a
                    href={floorplan2025.src}
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
