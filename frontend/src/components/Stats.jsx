export default function Stats() {
    const stats = [
        {
            number: "50K+",
            title: "Meetings Processed"
        },
        {
            number: "10K+",
            title: "Happy Users"
        },
        {
            number: "98%",
            title: "AI Accuracy"
        },
        {
            number: "1M+",
            title: "Minutes Saved"
        }
    ];

    return (
        <section className="bg-slate-950 py-24 px-8">

            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Trusted Worldwide
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

                {stats.map((item, index) => (

                    <div
                        key={index}
                        className="bg-slate-900 rounded-2xl p-10 text-center border border-slate-800 hover:border-cyan-400 transition"
                    >
                        <h3 className="text-5xl font-bold text-cyan-400">
                            {item.number}
                        </h3>

                        <p className="mt-4 text-slate-300">
                            {item.title}
                        </p>
                    </div>

                ))}

            </div>

        </section>
    );
}