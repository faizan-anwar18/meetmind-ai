import Sidebar from "../components/Sidebar";
import { useState, useEffect, useRef } from "react";

export default function Record() {

    const [recording, setRecording] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);

    const [audioURL, setAudioURL] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    useEffect(() => {

        let interval;

        if (recording) {

            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);

        } else {

            clearInterval(interval);

        }

        return () => clearInterval(interval);

    }, [recording]);
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    const startRecording = async () => {

        try {

            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });

            streamRef.current = stream;

            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorderRef.current = mediaRecorder;

            const chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorder.onstop = () => {

                const blob = new Blob(chunks, {
                    type: "audio/webm",
                });

                setAudioBlob(blob);

                const url = URL.createObjectURL(blob);

                setAudioURL(url);

            };

            mediaRecorder.start();

            setRecording(true);

        } catch (err) {

            alert("Microphone permission denied.");

            console.log(err);

        }

    };

    const stopRecording = () => {

        mediaRecorderRef.current.stop();

        streamRef.current.getTracks().forEach(track => track.stop());

        setRecording(false);

        setSeconds(0);

    };
    return (
        <div className="flex bg-slate-950 min-h-screen text-white">

            <Sidebar />

            <main className="flex-1 p-10">

                <h1 className="text-4xl font-bold mb-2">
                    🎙 Record Meeting
                </h1>

                <p className="text-slate-400 mb-10">
                    Record your meeting and let AI generate notes automatically.
                </p>

                {/* Recorder Card */}

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center">

                    <div
                        className={`text-8xl mb-6 transition-all duration-500 ${recording
                            ? "animate-pulse scale-110 drop-shadow-[0_0_30px_cyan]"
                            : ""
                            }`}
                    >
                        🎤
                    </div>
                    <div className="mb-6">

                        <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${recording
                                ? "bg-red-500/20 text-red-400"
                                : "bg-slate-700 text-slate-300"
                                }`}
                        >
                            {recording ? "🔴 Recording Live" : "⚪ Ready"}
                        </span>

                    </div>

                    <h2 className="text-3xl font-bold mb-4">
                        {recording ? "Recording..." : "Ready to Record"}
                    </h2>

                    <p className="text-slate-400 mb-8">
                        {recording
                            ? "Your microphone is active."
                            : "Click the button below to start recording."
                        }
                    </p>

                    <button
                        onClick={() => {

                            if (recording) {

                                stopRecording();

                            } else {

                                startRecording();

                            }

                        }}
                        className={`px-10 py-4 rounded-xl text-lg font-bold transition duration-300
                        ${recording
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-cyan-500 hover:bg-cyan-600"
                            }`}
                    >
                        {recording ? "■ Stop Recording" : "🎙 Start Recording"}
                    </button>

                </div>

                {/* Timer */}

                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Recording Time
                    </h2>

                    <div className="text-5xl font-mono text-cyan-400">
                        {minutes}:{secs}
                        {audioURL && (

                            <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

                                <h2 className="text-2xl font-bold mb-4">
                                    🎧 Recorded Audio
                                </h2>

                                <audio controls className="w-full">
                                    <source src={audioURL} type="audio/webm" />
                                </audio>

                            </div>

                        )}
                        <div className="mt-8 grid grid-cols-3 gap-6">

                            <div className="bg-slate-900 rounded-2xl p-6 text-center">

                                <h3 className="text-slate-400 mb-2">
                                    Audio Quality
                                </h3>

                                <p className="text-3xl font-bold text-cyan-400">
                                    HD
                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-2xl p-6 text-center">

                                <h3 className="text-slate-400 mb-2">
                                    AI Status
                                </h3>

                                <p className="text-3xl font-bold text-green-400">
                                    Ready
                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-2xl p-6 text-center">

                                <h3 className="text-slate-400 mb-2">
                                    Language
                                </h3>

                                <p className="text-3xl font-bold text-purple-400">
                                    English
                                </p>

                            </div>

                        </div>
                    </div>

                </div>

            </main>

        </div>
    );
}