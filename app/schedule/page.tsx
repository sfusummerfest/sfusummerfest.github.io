import { panelSchedule, stageSchedule } from './scheduleData';

export const metadata = {
    title: 'Summerfest Schedule',
    description: 'View the Summerfest 2025 Schedule.',
};

export default function Schedule() {
    return (
        <article className='md:max-w-screen-xl mx-auto px-4 pt-16 pb-20'>
            <header className="border-b-2 border-stone-950 sm:text-center my-10 pb-8">
                <h2 className="text-4xl font-bold text-stone-950">
                    Summerfest 2025 Schedule
                </h2>
                <p className="text-lg text-stone-700">
                    Main stage and panel schedules
                </p>
                <p className="text-lg text-stone-700 mt-5">
                    All listed times are in PM.
                </p>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Stage Schedule Table */}
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-stone-950">
                        Stage Schedule
                    </h2>
                    <table className="w-full border-collapse">
                        <tbody>
                            {stageSchedule.map((stage, index) => (
                                <>
                                    <tr key={index} className="border-b border-stone-300 hidden sm:table-row">
                                        <td className="text-base sm:text-lg py-4">{stage.time}</td>
                                        <td className="text-base sm:text-lg py-4">{stage.title}</td>
                                    </tr>

                                    <tr key={index} className="border-b border-stone-300 table-row sm:hidden ">
                                        <td className="text-base sm:text-lg py-4 flex flex-col">
                                            <div>
                                                {stage.time}
                                            </div>
                                            <div>
                                                {stage.title}
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Panel Schedule Table */}
                <div>
                    <h2 className="text-3xl font-bold mb-2 text-stone-950">
                        Panel Schedule
                    </h2>
                    <table className="w-full border-collapse">
                        <tbody>
                            {panelSchedule.map((panel, index) => (
                                <>
                                    <tr key={index} className="border-b border-stone-300 hidden sm:table-row">
                                        <td className="text-base sm:text-lg py-4 pr-6 whitespace-nowrap">{panel.time}</td>
                                        <td className="text-base sm:text-lg py-4">{panel.title}</td>
                                    </tr>

                                    <tr key={index} className="border-b border-stone-300 table-row sm:hidden ">
                                        <td className="text-base sm:text-lg py-4 flex flex-col">
                                            <div>
                                                {panel.time}
                                            </div>
                                            <div>
                                                {panel.title}
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </article>
    );
}