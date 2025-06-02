"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function CredentialField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="flex items-center gap-4 min-w-[400px] max-w-full overflow-x-auto mb-4 border border-purple-700 bg-gray-950 rounded-lg px-4 py-3 shadow-sm transition-all hover:shadow-md">
      <span className="font-medium min-w-[120px] max-w-[180px] truncate whitespace-nowrap block">
        {label}:
      </span>
      <span
        className="text-purple-400 select-all min-w-[260px] max-w-[520px] block"
        style={{ wordBreak: "break-all" }}
      >
        {show ? value : "••••••••••••••••••••••••••••"}
      </span>
      <button
        className="ml-1 text-gray-400 hover:text-purple-400 focus:outline-none"
        onClick={() => setShow((s) => !s)}
        title={show ? "Hide" : "Show"}
        type="button"
      >
        {show ? (
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-5.52 0-10-4.48-10-10 0-2.21.72-4.25 1.94-5.94M6.34 6.34A7.96 7.96 0 0 1 12 4c5.52 0 10 4.48 10 10 0 2.21-.72 4.25-1.94 5.94M1 1l22 22" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
      <button
        className="ml-1 text-gray-400 hover:text-purple-400 focus:outline-none"
        onClick={handleCopy}
        title="Copy"
        type="button"
      >
        <Copy size={16} />
      </button>
      {copied && <span className="ml-1 text-green-400 text-xs">Copied!</span>}
    </div>
  );
}
