export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="
            bg-slate-900
            border
            border-slate-700
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:-translate-y-3
            hover:border-blue-500
            hover:shadow-2xl
            hover:shadow-blue-500/20
            cursor-pointer
        ">

            <div className="text-5xl mb-5">
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
                {title}
            </h3>

            <p className="text-gray-400 leading-7">
                {description}
            </p>

        </div>
    );
}