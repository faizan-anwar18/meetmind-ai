import Navbar from "./Navbar";
import FeatureCard from "./FeatureCard";

export default function Hero() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
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

            {/* Features Section */}
            <section className="bg-slate-950 py-20 px-8">

                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Powerful Features
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <FeatureCard
                        icon="🎙️"
                        title="Smart Recording"
                        description="Record every meeting with crystal-clear audio."
                    />

                    <FeatureCard
                        icon="🧠"
                        title="AI Summaries"
                        description="Generate meeting notes automatically."
                    />

                    <FeatureCard
                        icon="📅"
                        title="Calendar Sync"
                        description="Connect Google Calendar and Outlook."
                    />

                    <FeatureCard
                        icon="☁️"
                        title="Cloud Storage"
                        description="Access meetings securely from anywhere."
                    />

                </div>

            </section>
        </>
    );
}