import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Natsuko from "@/public/images/natsuko.webp";
import faqs from '@/app/data/faqs.json';

export const metadata = {
    title: 'Summerfest FAQ',
    description: 'Frequently askedgeneral and vendor related questions.'
};

export default function FAQ() {
    const artistAndVendorFAQs = faqs.filter(faq => faq.category === "Artist and Vendor FAQ");
    const generalFAQs = faqs.filter(faq => faq.category === "General FAQ");

    return (
        <div
            className="flex flex-col items-center justify-between min-h-screen
        space-y-8 bg-stone-50"
        >
            <article className="w-full md:max-w-screen-xl px-5 pt-16">
                <header className="border-b-2 border-stone-950 sm:text-center my-10 pb-8">
                    <h2 className="text-4xl font-bold text-stone-950">
                        FAQ&apos;s
                    </h2>
                    <p className="text-lg text-stone-700">
                        Frequently Asked General and Vendor Related Questions
                    </p>
                </header>
                <article className="grid gird-cols-1 gap-5 lg:grid-cols-2">
                    <div className="flex justify-center lg:col-start-2">
                        <img src={Natsuko.src} alt="natsuko" className="p-5 sm:p-0 w-2/3 sm:w-3/5 md:w-1/3 lg:w-3/5 h-auto object-contain" />
                    </div>
                    <div className="pb-20 lg:row-start-1 lg:col-start-1">
                        <h3 className="text-2xl font-semibold mb-4">General FAQ</h3>
                        <Accordion type="single" collapsible className="w-full mb-10">
                            {generalFAQs.map(faq => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        <h3 className="text-2xl font-semibold mb-4">Artist and Vendor FAQ</h3>
                        <Accordion type="single" collapsible className="w-full">
                            {artistAndVendorFAQs.map(faq => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </article>
            </article>
        </div >
    );
};