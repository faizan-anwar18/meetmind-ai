import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Project Manager",
            review: "MeetMind AI saves us hours every week by automatically creating meeting summaries."
        },
        {
            name: "David Lee",
            role: "Startup Founder",
            review: "The AI notes are incredibly accurate. We never miss action items anymore."
        },
        {
            name: "Emily Brown",
            role: "Software Engineer",
            review: "Calendar sync and instant summaries make our workflow much faster."
        }
    ];

    return (

        <section className="bg-slate-950 py-24 px-8">

            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                What Our Users Say
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {reviews.map((item, index) => (

                    <TestimonialCard
                        key={index}
                        name={item.name}
                        role={item.role}
                        review={item.review}
                    />

                ))}

            </div>

        </section>

    );
}