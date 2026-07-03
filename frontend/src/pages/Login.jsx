import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen bg-slate-950 flex items-center justify-center px-6 overflow-hidden">

            <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px]"></div>

            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px]"></div>

            <div className="relative z-10 w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-3xl p-10 shadow-2xl">

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-white mb-3">
                        🚀 MeetMind AI
                    </h1>

                    <p className="text-slate-400">
                        Welcome back! Please login to continue.
                    </p>

                </div>

                <form className="space-y-6">

                    <div>
                        <label className="block text-slate-300 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />
                    </div>

                    <div>

                        <div className="flex justify-between items-center mb-2">

                            <label className="text-slate-300">
                                Password
                            </label>

                            <a
                                href="#"
                                className="text-cyan-400 text-sm hover:underline"
                            >
                                Forgot Password?
                            </a>

                        </div>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 pr-16 text-white outline-none focus:border-cyan-400"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-white"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/dashboard")}
                        className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 py-3 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                        Login
                    </button>

                </form>

                <div className="flex items-center my-6">

                    <div className="flex-1 h-px bg-slate-700"></div>

                    <span className="px-4 text-slate-500 text-sm">
                        OR
                    </span>

                    <div className="flex-1 h-px bg-slate-700"></div>

                </div>

                <button
                    className="w-full border border-slate-700 rounded-xl py-3 text-white hover:bg-slate-800 transition"
                >
                    Continue with Google
                </button>

                <p className="text-center text-slate-400 mt-8">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-cyan-400 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>
    );
}