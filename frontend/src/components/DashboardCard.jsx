export default function DashboardCard({ title, value, icon }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-slate-400">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-3">
                        {value}
                    </h2>

                </div>

                <div className="text-6xl">
                    {icon}
                </div>

            </div>

        </div>
    );
}