import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-emerald-50">
        Get in Touch
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-emerald-50">
              Contact Form
            </CardTitle>
            <CardDescription className="text-emerald-100/80">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-emerald-100"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="bg-black/50 border-emerald-500/30 text-emerald-50 placeholder:text-emerald-500/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-emerald-100"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-black/50 border-emerald-500/30 text-emerald-50 placeholder:text-emerald-500/50"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-emerald-100"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="bg-black/50 border-emerald-500/30 text-emerald-50 placeholder:text-emerald-500/50"
                  rows={5}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-emerald-50">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-emerald-100/80">
                Feel free to reach out through any of the following channels:
              </p>
              <div className="flex items-center space-x-3 text-emerald-100">
                <Mail className="h-5 w-5" />
                <span>contact@yourname.com</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-100">
                <Twitter className="h-5 w-5" />
                <span>@yourusername</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-emerald-50">
                Connect with Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Github className="h-8 w-8" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                </Link>
                <Link
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Twitter className="h-8 w-8" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
