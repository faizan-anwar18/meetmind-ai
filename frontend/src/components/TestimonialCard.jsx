export default function TestimonialCard({ name, role, review }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">

            <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
            </div>

            <p className="text-slate-300 italic leading-8">
                "{review}"
            </p>

            <div className="mt-6">
                <h3 className="text-white font-bold">
                    {name}
                </h3>

                <p className="text-slate-400 text-sm">
                    {role}
                </p>
            </div>

        </div>
    );
}