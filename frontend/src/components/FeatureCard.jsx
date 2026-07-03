export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300">

            <div className="text-4xl mb-4">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
                {title}
            </h3>

            <p className="text-gray-400">
                {description}
            </p>

        </div>
    );
}