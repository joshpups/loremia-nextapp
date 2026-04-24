"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, CheckSquare, Trophy, LogOut, Activity, ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white selection:bg-indigo-500/30 font-[family-name:var(--font-geist-sans)]">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.9)), url("/profile-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="w-full max-w-4xl px-6 py-20">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Main Dashboard</h1>
            <p className="mt-2 text-zinc-400">Welcome back to your mastery center.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-2 font-semibold transition-all hover:bg-white/10 hover:border-white/20"
          >
            Log Out <LogOut className="h-4 w-4 text-red-400" />
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Personal Progress", value: "85%", Icon: BarChart3, color: "text-blue-400", dot: "bg-blue-500" },
            { title: "Completed Tasks", value: "12", Icon: CheckSquare, color: "text-green-400", dot: "bg-green-500" },
            { title: "Achievement Points", value: "1,240", Icon: Trophy, color: "text-purple-400", dot: "bg-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:bg-white/10">
              <div className="flex items-center justify-between mb-4">
                <stat.Icon className={`h-8 w-8 ${stat.color}`} />
                <span className={`h-2 w-2 rounded-full ${stat.dot} shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
              </div>
              <h3 className="text-sm font-medium text-zinc-500">{stat.title}</h3>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-indigo-400" />
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-600/20 flex items-center justify-center overflow-hidden">
                    <img src="/profile-bg.jpg" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Logged in successfully</p>
                    <p className="text-xs text-zinc-500">Just now</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-indigo-400">Success</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
