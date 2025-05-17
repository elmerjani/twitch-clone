import StreamCard from "@/components/StreamCard";
import { dummyStreams } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="bg-[#0e0e10] min-h-screen">
      <section className="p-6">
        <h2 className="text-white text-2xl mb-4">Live Streams</h2>

        <div className="flex flex-wrap gap-3">
          {dummyStreams.map((stream, idx) => (
            <StreamCard key={idx} stream={stream} />
          ))}
        </div>
      </section>
    </main>
  );
}
