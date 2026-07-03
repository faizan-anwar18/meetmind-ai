export default function PricingCard({
    title,
    price,
    features,
    popular
}) {
    return (
        <div
            className={`rounded-2xl p-8 border transition duration-300 ${popular
                    ? "border-cyan-400 bg-slate-800 scale-105"
                    : "border-slate-800 bg-slate-900"
                }`}
        >
            {popular && (
                <div className="bg-cyan-500 text-black text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                </div>
            )}

            <h3 className="text-3xl font-bold text-white">
                {title}
            </h3>

            <p className="text-5xl font-bold text-cyan-400 my-6">
                {price}
            </p>

            <ul className="space-y-4 text-slate-300 mb-8">
                {features.map((feature, index) => (
                    <li key={index}>
                        ✔ {feature}
                    </li>
                ))}
            </ul>

            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
                Choose Plan
            </button>
        </div>
    );
}