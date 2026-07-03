export default function RecentMeetingCard({
    title,
    date,
    duration,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">

            <div className="flex justify-between items-center">

                <div>

                    <h3 className="text-lg font-semibold text-white">
                        {title}
                    </h3>

                    <p className="text-slate-400 mt-1">
                        {date}
                    </p>

                </div>

                <span className="text-cyan-400 font-semibold">
                    {duration}
                </span>

            </div>

        </div>
    );
}