"use client";

import { motion } from "framer-motion";
import { Download, Menu, Mountain } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "https://backendalmanac.in", external: true },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/shyam_kumar_CV.pdf";
    link.download = "Shyam_Kumar_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath =
      pathname === "/"
        ? "Home"
        : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setActiveItem(currentPath);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-[#a6e3a1]" />
        </Link>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#cdd6f4] hover:text-[#a6e3a1]"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-[#585b70] bg-[#313244]">
            <div className="flex flex-col gap-4 pt-10">
              {menuItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.name}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-base transition-all duration-300 ${activeItem === item.name
                      ? "text-[#a6e3a1] font-bold"
                      : "text-[#cdd6f4] hover:text-[#a6e3a1]"
                      }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Button className="mt-4 gap-2 bg-[#a6e3a1] hover:bg-[#f5c2e7] text-[#1e1e2e]">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden items-center gap-6 rounded-full border border-[#585b70] bg-[#313244]/50 px-6 py-1.5 backdrop-blur-sm lg:flex">
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <motion.button
                className={`relative px-2 py-1.5 text-sm font-medium transition-colors ${activeItem === item.name
                  ? "text-[#a6e3a1]"
                  : "text-[#bac2de] hover:text-[#cdd6f4]"
                  }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
                {activeItem === item.name && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#a6e3a1] via-[#a6e3a1]/70 to-[#a6e3a1]/0" />
                )}
              </motion.button>
            </Link>
          ))}
        </div>
        {/* Download Button */}
        <Button
          onClick={handleDownloadCV}
          className="hidden gap-2 lg:inline-flex bg-[#a6e3a1] hover:bg-[#f5c2e7] text-[#1e1e2e]"
        >
          <Download className="h-4 w-4" />
          Download CV
        </Button>{" "}
      </div>
    </nav>
  );
}
