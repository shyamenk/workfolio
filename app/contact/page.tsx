import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <h1 className="text-5xl font-bold mb-12 text-left text-emerald-500">
        Get in Touch
      </h1>

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
          <CardHeader className="space-y-3">
            <CardTitle className="text-3xl font-bold text-emerald-50">
              Contact Form
            </CardTitle>
            <CardDescription className="text-lg text-emerald-100/80">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-10">
          <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-emerald-50">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-emerald-100/80">
                Feel free to reach out through any of the following channels:
              </p>
              <div className="flex items-center space-x-4 text-emerald-100 text-lg">
                <Mail className="h-6 w-6" />
                <span>shyamenk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-emerald-100 text-lg">
                <FaXTwitter className="h-6 w-6" />
                <span>@shyamenk07</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-emerald-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-emerald-50">
                Connect with Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-6">
                <Link
                  href="https://github.com/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaGithub className="h-10 w-10" />
                </Link>
                <Link
                  href="https://linkedin.com/in/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaLinkedin className="h-10 w-10" />
                </Link>
                <Link
                  href="https://twitter.com/shyamenk07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaXTwitter className="h-10 w-10" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
