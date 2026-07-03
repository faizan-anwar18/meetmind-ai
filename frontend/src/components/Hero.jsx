import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import FeatureCard from "./FeatureCard";
import HowItWorks from "./HowItWorks";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Hero() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col justify-center items-center text-center text-white px-6">
                <div className="absolute inset-0 -z-10">
                    <div className="w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[180px]"></div>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    🚀 MeetMind AI
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-9 mb-10">
                    Never lose an important discussion again.
                    MeetMind AI records, summarizes and organizes your meetings
                    using Artificial Intelligence.
                </p>

                <div className="flex gap-4">

                    <Link
                        to="/signup"
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 inline-block"
                    >
                        Get Started
                    </Link>

                    <a
                        href="#how-it-works"
                        className="border border-slate-600 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 px-8 py-4 rounded-xl inline-block"
                    >
                        Watch Demo
                    </a>

                </div>
            </section>

            {/* Features Section */}
            <section className="bg-slate-950 py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
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

            <HowItWorks />
            <Stats />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
}