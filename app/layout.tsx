import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyam Kumar - Full-Stack Developer",
  description:
    "Professional portfolio of Shyam Kumar, showcasing skills, projects, and experience in full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-100`}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="min-h-screen">{children}</main>
        </div>
        <div className="fixed inset-0 -z-10">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

          {/* Gradient Shapes */}
          <div className="absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-700/5 blur-3xl" />

          {/* Additional Decorative Elements */}
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/10 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-emerald-600/5 blur-2xl" />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950/80" />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-5 mix-blend-overlay">
            <div className="h-full w-full bg-[url('/noise.png')] bg-repeat" />
          </div>
        </div>
      </body>
    </html>
  );
}
