import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Meetings() {
    return (
        <div className="flex bg-slate-950 min-h-screen text-white">

            <Sidebar />

            <main className="flex-1 p-10">

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-4xl font-bold">
                        📅 Meetings
                    </h1>

                    <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold">
                        + New Meeting
                    </button>

                </div>

                <input
                    type="text"
                    placeholder="Search meetings..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 mb-8 outline-none focus:border-cyan-400"
                />

                <div className="space-y-5">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex justify-between items-center">

                        <div>
                            <h2 className="text-xl font-semibold">
                                Project Discussion
                            </h2>

                            <p className="text-slate-400">
                                Today • 35 min
                            </p>
                        </div>

                        <Link
                            to="/meeting"
                            className="text-cyan-400 hover:text-white font-semibold"
                        >
                            View →
                        </Link>

                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex justify-between items-center">

                        <div>
                            <h2 className="text-xl font-semibold">
                                Client Meeting
                            </h2>

                            <p className="text-slate-400">
                                Yesterday • 52 min
                            </p>
                        </div>

                        <Link
                            to="/meeting"
                            className="text-cyan-400 hover:text-white font-semibold"
                        >
                            View →
                        </Link>

                    </div>

                </div>

            </main>

        </div>
    );
}