/**
 * @file contact-form.tsx
 * @description A contact form component that handles user input and sends emails using server actions.
 * Includes form validation, loading states, and success/error messages.
 */

"use client";

import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/send-mail";

/**
 * @component SubmitButton
 * @description A submit button component that shows loading state while the form is being submitted.
 * Uses React's useFormStatus hook to track form submission state.
 * 
 * @returns {JSX.Element} A button component with loading state
 */
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-[#a6e3a1] hover:bg-[#cba6f7] text-[#1e1e2e] font-mono transition-all"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

/**
 * @component ContactForm
 * @description A contact form component that handles user input and sends emails.
 * Features:
 * - Form validation
 * - Loading states
 * - Success/error messages
 * - Automatic form reset on successful submission
 * 
 * @returns {JSX.Element} The rendered contact form component
 * 
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 */
export function ContactForm() {
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * @function handleSubmit
   * @description Handles the form submission process
   * @param {FormData} formData - The form data containing user input
   * @returns {Promise<void>}
   */
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
        <label htmlFor="name" className="text-sm font-mono font-medium text-[#a6e3a1]">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-[#a6e3a1]/40 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cba6f7] focus:border-transparent font-mono text-[#cdd6f4] bg-[#313244]/60 placeholder:text-[#bac2de]"
          placeholder="Your Name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-mono font-medium text-[#a6e3a1]">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-[#a6e3a1]/40 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cba6f7] focus:border-transparent font-mono text-[#cdd6f4] bg-[#313244]/60 placeholder:text-[#bac2de]"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-mono font-medium text-[#a6e3a1]"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="w-full px-3 py-2 border border-[#a6e3a1]/40 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#cba6f7] focus:border-transparent font-mono text-[#cdd6f4] bg-[#313244]/60 placeholder:text-[#bac2de]"
          placeholder="Your message here..."
          rows={5}
        />
      </div>
      <SubmitButton />
      {message && (
        <p
          className={`text-sm font-mono ${message.includes("successfully") ? "text-[#a6e3a1]" : "text-[#f38ba8]"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
