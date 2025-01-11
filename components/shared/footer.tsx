import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-transparent w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-400">
            © {currentYear} shyamenk. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link
              href="https://github.com/shyamenk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5 text-zinc-400 transition-colors hover:text-emerald-400" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shyamenk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5 text-zinc-400 transition-colors hover:text-emerald-400" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/shyamenk07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-5 w-5 text-zinc-400 transition-colors hover:text-emerald-400" />
              <span className="sr-only">Twitter</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
