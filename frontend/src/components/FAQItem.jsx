import { useState } from "react";

export default function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-slate-800 rounded-xl mb-4 overflow-hidden">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center p-5 text-left text-white font-semibold bg-slate-900 hover:bg-slate-800 transition"
            >
                {question}

                <span className="text-cyan-400 text-2xl">
                    {open ? "−" : "+"}
                </span>
            </button>

            {open && (
                <div className="p-5 bg-slate-950 text-slate-300 leading-8">
                    {answer}
                </div>
            )}

        </div>
    );
}