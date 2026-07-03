import PricingCard from "./PricingCard";

export default function Pricing() {

    const plans = [
        {
            title: "Free",
            price: "$0",
            features: [
                "AI Meeting Notes",
                "Basic Recording",
                "Export PDF"
            ]
        },
        {
            title: "Pro",
            price: "$19/mo",
            popular: true,
            features: [
                "Unlimited Meetings",
                "Cloud Storage",
                "AI Summaries",
                "Calendar Sync",
                "Priority Support"
            ]
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited Users",
                "API Access",
                "Dedicated Manager",
                "Advanced Analytics"
            ]
        }
    ];

    return (

        <section className="bg-slate-950 py-24 px-8">

            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing Plans
            </h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                {plans.map((plan, index) => (

                    <PricingCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        features={plan.features}
                        popular={plan.popular}
                    />

                ))}

            </div>

        </section>

    );
}