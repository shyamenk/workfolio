import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <ContactForm />
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
                <FaXTwitter className="h-5 w-5" />
                <span>@shyamenk07</span>
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
                  href="https://github.com/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaGithub className="h-8 w-8" />
                </Link>
                <Link
                  href="https://linkedin.com/in/shyamenk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaLinkedin className="h-8 w-8" />
                </Link>
                <Link
                  href="https://twitter.com/shyamenk07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <FaXTwitter className="h-8 w-8" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
