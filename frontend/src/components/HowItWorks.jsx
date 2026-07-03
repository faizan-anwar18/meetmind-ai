export default function HowItWorks() {
    const steps = [
        {
            icon: "🎙️",
            title: "Record Meeting",
            description: "Record online or offline meetings with crystal-clear audio."
        },
        {
            icon: "🧠",
            title: "AI Processing",
            description: "MeetMind AI understands conversations and identifies key points."
        },
        {
            icon: "📝",
            title: "Generate Summary",
            description: "Receive structured meeting notes, action items and decisions."
        },
        {
            icon: "📤",
            title: "Share Instantly",
            description: "Share summaries with teammates in one click."
        }
    ];

    return (
        <section className="bg-slate-950 py-28 px-6">

            <h2 className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
                How MeetMind AI Works
            </h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >

                        <div className="text-6xl mb-6">
                            {step.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            {step.title}
                        </h3>

                        <p className="text-gray-400 leading-7">
                            {step.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}