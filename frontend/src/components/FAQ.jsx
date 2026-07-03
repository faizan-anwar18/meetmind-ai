import FAQItem from "./FAQItem";

export default function FAQ() {

    const faqs = [
        {
            question: "Is MeetMind AI free?",
            answer: "Yes. We offer a free plan with essential meeting recording and AI summary features."
        },
        {
            question: "Which meeting platforms are supported?",
            answer: "MeetMind AI works with Zoom, Google Meet, Microsoft Teams and uploaded audio recordings."
        },
        {
            question: "Can I export meeting summaries?",
            answer: "Yes. You can export summaries as PDF, DOCX or share them instantly."
        },
        {
            question: "Is my meeting data secure?",
            answer: "Absolutely. All recordings are encrypted and securely stored in the cloud."
        }
    ];

    return (

        <section className="bg-slate-950 py-24 px-8">

            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto">

                {faqs.map((faq, index) => (

                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />

                ))}

            </div>

        </section>

    );
}