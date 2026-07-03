import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import RecentMeetingCard from "../components/RecentMeetingCard";

export default function Dashboard() {
    return (
        <div className="flex bg-slate-950 min-h-screen text-white">

            <Sidebar />

            <main className="flex-1 p-10">

                <h1 className="text-4xl font-bold">
                    Welcome Back 👋
                </h1>

                <p className="text-slate-400 mt-2 mb-10">
                    Here's an overview of your meetings.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <DashboardCard
                        title="Meetings"
                        value="24"
                        icon="📅"
                    />

                    <DashboardCard
                        title="AI Notes"
                        value="132"
                        icon="🤖"
                    />

                    <DashboardCard
                        title="Recordings"
                        value="18"
                        icon="🎤"
                    />

                    <DashboardCard
                        title="Minutes Saved"
                        value="740"
                        icon="⏱️"
                    />

                </div>
                <div className="mt-12">

                    <h2 className="text-2xl font-bold mb-6">
                        Recent Meetings
                    </h2>

                    <div className="space-y-4">

                        <RecentMeetingCard
                            title="Project Discussion"
                            date="Today • 2:30 PM"
                            duration="35 min"
                        />

                        <RecentMeetingCard
                            title="Client Presentation"
                            date="Yesterday • 11:00 AM"
                            duration="52 min"
                        />

                        <RecentMeetingCard
                            title="Weekly Team Sync"
                            date="Monday • 9:00 AM"
                            duration="28 min"
                        />

                    </div>

                </div>

            </main>

        </div>
    );
}