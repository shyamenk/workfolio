"use client";

import { useState } from "react";
import copy from "copy-to-clipboard";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4 rounded-lg bg-black/75 backdrop-blur supports-[backdrop-filter]:bg-black/75">
      {filename && (
        <div className="flex items-center justify-between rounded-t-lg border-b border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
          <span>{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={onCopy}
          className="absolute right-2 top-2 rounded-lg border border-white/20 p-2 text-white/50 opacity-0 transition-opacity hover:border-white/40 hover:text-white group-hover:opacity-100"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
