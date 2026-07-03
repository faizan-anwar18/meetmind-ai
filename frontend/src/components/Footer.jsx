export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-16 px-8">

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        🚀 MeetMind AI
                    </h2>

                    <p className="text-slate-400 leading-7">
                        AI-powered meeting assistant that records,
                        summarizes and organizes your conversations
                        effortlessly.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-white font-semibold mb-5">
                        Product
                    </h3>

                    <ul className="space-y-3 text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400">Features</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
                        <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Demo</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-5">
                        Company
                    </h3>

                    <ul className="space-y-3 text-slate-400">
                        <li><a href="#" className="hover:text-cyan-400">About</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
                        <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-5">
                        Contact
                    </h3>

                    <p className="text-slate-400">
                        📧 support@meetmind.ai
                    </p>

                    <p className="text-slate-400 mt-3">
                        📍 Mumbai, India
                    </p>
                </div>

            </div>

            <div className="border-t border-slate-800 mt-14 pt-8 text-center text-slate-500">

                © 2026 MeetMind AI • Built by Faizan Anwar ❤️

            </div>

        </footer>
    );
}