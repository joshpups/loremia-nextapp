import Image from "next/image";
import Link from "next/link";
import { Rocket, Zap, Shield, ArrowRight, LogIn } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white selection:bg-indigo-500/30 font-[family-name:var(--font-geist-sans)]">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.9)), url("/profile-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <main className="relative flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-20 text-center">
        {/* Subtle Glows */}
        <div className="absolute -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
        
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            Project Live: tuyor-nextapp
          </div>
          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Next.js Mastery
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 drop-shadow-lg sm:text-xl">
            Enhanced Next.js project with Landing Page, Authentication, and GitHub integration. Built for performance and aesthetics.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Landing Page", desc: "Premium interface with dynamic background and animations.", Icon: Rocket, color: "text-blue-400" },
            { title: "Auth Flow", desc: "Secure Login and Signup pages with input validation.", Icon: Shield, color: "text-indigo-400" },
            { title: "Git Mastery", desc: "Fully tracked and pushed to GitHub for collaboration.", Icon: Zap, color: "text-yellow-400" },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.05] p-8 text-left transition-all hover:bg-white/[0.1] backdrop-blur-md">
              <item.Icon className={`mb-4 h-8 w-8 ${item.color}`} />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-zinc-400 group-hover:text-zinc-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 font-semibold text-white transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 font-semibold transition-all hover:bg-white/10 backdrop-blur-md hover:border-white/40"
          >
            Sign In <LogIn className="h-4 w-4 text-indigo-400" />
          </Link>
        </div>
      </main>

      <footer className="w-full border-t border-white/5 py-8 text-center text-sm text-zinc-500 backdrop-blur-md">
        &copy; {new Date().getFullYear()} tuyor-nextapp. Built by joshpups.
      </footer>
    </div>
  );
}
