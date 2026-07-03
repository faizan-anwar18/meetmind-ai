import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <Link
                    to="/"
                    className="text-2xl font-bold text-white hover:text-cyan-400 transition"
                >
                    🚀 MeetMind AI
                </Link>

                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="text-gray-300 hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg inline-block"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav>
    );
}