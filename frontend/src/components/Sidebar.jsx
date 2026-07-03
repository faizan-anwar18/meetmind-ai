import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

            <h2 className="text-2xl font-bold text-white mb-10">
                🚀 MeetMind AI
            </h2>

            <nav className="space-y-2">

                <Link
                    to="/dashboard"
                    className={`block px-4 py-3 rounded-xl transition ${location.pathname === "/dashboard"
                            ? "bg-cyan-500 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                        }`}
                >
                    🏠 Dashboard
                </Link>

                <Link
                    to="/meetings"
                    className={`block px-4 py-3 rounded-xl transition ${location.pathname === "/meetings"
                            ? "bg-cyan-500 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                        }`}
                >
                    📅 Meetings
                </Link>

                <Link
                    to="/record"
                    className={`block px-4 py-3 rounded-xl transition ${location.pathname === "/record"
                            ? "bg-cyan-500 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                        }`}
                >
                    🎤 Record
                </Link>

                <Link
                    to="/settings"
                    className={`block px-4 py-3 rounded-xl transition ${location.pathname === "/settings"
                            ? "bg-cyan-500 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                        }`}
                >
                    ⚙️ Settings
                </Link>

            </nav>

        </aside>
    );
}