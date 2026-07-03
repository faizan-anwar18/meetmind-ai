import Sidebar from "../components/Sidebar";

export default function MeetingDetails() {
    return (
        <div className="flex bg-slate-950 min-h-screen text-white">

            <Sidebar />

            <main className="flex-1 p-10">

                <h1 className="text-4xl font-bold mb-2">
                    📅 Project Discussion
                </h1>

                <p className="text-slate-400 mb-8">
                    Today • 2:30 PM • 35 minutes
                </p>

                {/* Recording */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

                    <h2 className="text-2xl font-semibold mb-4">
                        🎙 Recording
                    </h2>

                    <div className="bg-slate-800 rounded-xl h-24 flex items-center justify-center text-slate-400">
                        Audio Player (Coming Soon)
                    </div>

                </div>

                {/* AI Summary */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

                    <h2 className="text-2xl font-semibold mb-4">
                        🤖 AI Summary
                    </h2>

                    <p className="text-slate-300 leading-8">
                        The team discussed the upcoming MeetMind AI release.
                        Tasks were assigned for frontend development,
                        backend API integration, authentication,
                        and dashboard improvements.
                    </p>

                </div>

                {/* Key Points */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

                    <h2 className="text-2xl font-semibold mb-4">
                        ✅ Key Points
                    </h2>

                    <ul className="space-y-3 text-slate-300 list-disc pl-6">
                        <li>Complete Login & Signup UI</li>
                        <li>Finish Dashboard</li>
                        <li>Integrate AI Summary API</li>
                        <li>Deploy MVP before presentation</li>
                    </ul>

                </div>

                {/* Action Items */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        📋 Action Items
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between bg-slate-800 rounded-xl p-4">
                            <span>Design Dashboard</span>
                            <span className="text-cyan-400">
                                Faizan
                            </span>
                        </div>

                        <div className="flex justify-between bg-slate-800 rounded-xl p-4">
                            <span>Backend Authentication</span>
                            <span className="text-cyan-400">
                                Team
                            </span>
                        </div>

                        <div className="flex justify-between bg-slate-800 rounded-xl p-4">
                            <span>AI Integration</span>
                            <span className="text-cyan-400">
                                Next Sprint
                            </span>
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}