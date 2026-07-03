import Navbar from "./Navbar";

export default function Hero() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-center text-white px-6">

                <h1 className="text-6xl font-bold mb-6">
                    🚀 MeetMind AI
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mb-8">
                    Never lose an important discussion again.
                    MeetMind AI records, summarizes and organizes your meetings
                    using Artificial Intelligence.
                </p>

                <div className="flex gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
                        Get Started
                    </button>

                    <button className="border border-gray-600 px-8 py-3 rounded-xl hover:bg-slate-800">
                        Watch Demo
                    </button>
                </div>

            </section>
        </>
    );
}