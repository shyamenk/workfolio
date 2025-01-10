"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/send-mail";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
    setMessage(result.message);
    if (result.success && formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-emerald-700">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Your Name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-emerald-700">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-emerald-700"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="w-full px-3 py-2 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="Your message here..."
          rows={5}
        />
      </div>
      <SubmitButton />
      {message && (
        <p
          className={`text-sm ${message.includes("successfully") ? "text-emerald-600" : "text-red-500"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
