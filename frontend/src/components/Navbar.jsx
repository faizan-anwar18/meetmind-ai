export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <h1 className="text-2xl font-bold text-white">
                    🚀 MeetMind AI
                </h1>

                <div className="space-x-4">
                    <button className="text-gray-300 hover:text-white">
                        Login
                    </button>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
}