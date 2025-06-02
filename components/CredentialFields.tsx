"use client";
import CredentialField from "./CredentialField";

export default function CredentialFields({ channel }: { channel: any }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4 min-w-[400px] max-w-full overflow-x-auto mb-4 border border-purple-700 bg-gray-950 rounded-lg px-4 py-3 shadow-sm transition-all hover:shadow-md">
        <span className="font-medium min-w-[120px] max-w-[180px] truncate whitespace-nowrap block">
          Ingest URL:
        </span>
        <span
          className="text-purple-400 select-all min-w-[260px] max-w-[520px] block"
          style={{ wordBreak: "break-all" }}
        >
          {channel.ingestEndpoint || "Not set"}
        </span>
      </div>
      <CredentialField
        label="Stream Key"
        value={channel.streamKey || "Not set"}
      />
    </div>
  );
}
