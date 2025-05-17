"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import HLSPlayer from "@/components/HLSPlayer";
import { dummyStreams } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function WatchPage() {
  const params = useParams();
  const playbackurl = Array.isArray(params.playbackurl)
    ? params.playbackurl[0]
    : params.playbackurl;
  const stream = dummyStreams.find((s) => s.playbackurl === playbackurl);
  const [isFollowing, setIsFollowing] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "Viewer1", text: "This is awesome!" },
    { user: "Viewer2", text: "Love this stream!" },
  ]);

  if (!stream) {
    return <div className="p-4 text-red-500">Stream not found.</div>;
  }

  const handleFollow = () => setIsFollowing((f) => !f);
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setMessages((msgs) => [...msgs, { user: "You", text: chatInput }]);
      setChatInput("");
    }
  };

  return (
    <main className="flex flex-col md:flex-row gap-6 p-4 max-w-6xl mx-auto">
      {/* Video and Info */}
      <section className="flex-1">
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden mb-4">
          <HLSPlayer
            src={stream.hlsUrl}
            autoPlay
            controls
            width="100%"
            height="100%"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{stream.title}</h1>
        <div className="flex items-center gap-4 mb-4">
          <div>
            <div className="text-lg font-semibold">
              Channel: <span className="text-white/90">{stream.channel}</span>
            </div>
            <div className="text-md text-purple-400">
              Category: {stream.category}
            </div>
          </div>
          <Button
            className={`ml-4 px-6 py-2 rounded-full font-semibold ${
              isFollowing ? "bg-gray-700" : "bg-purple-600 hover:bg-purple-700"
            }`}
            onClick={handleFollow}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
        <div className="text-gray-300 mb-6">{stream.description}</div>
      </section>
      {/* Chat Section */}
      <aside className="w-full md:w-80 bg-[#18181b] rounded-xl flex flex-col max-h-[600px]">
        <div className="p-4 border-b border-gray-700 text-lg font-bold">
          Live Chat
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, idx) => (
            <div key={idx} className="text-sm">
              <span className="font-semibold text-purple-400">
                {msg.user}:{" "}
              </span>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSend}
          className="flex gap-2 p-4 border-t border-gray-700"
        >
          <input
            className="flex-1 rounded-lg bg-gray-800 text-white px-3 py-2 text-sm outline-none"
            placeholder="Type your message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 text-sm"
          >
            Send
          </Button>
        </form>
      </aside>
    </main>
  );
}
