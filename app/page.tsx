import StreamCard from "@/components/StreamCard";
import { dummyStreams } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="bg-[#0e0e10] min-h-screen">
      <section className="p-6">
        <div className="flex flex-wrap gap-3">
          {dummyStreams.map((stream, idx) => (
            <StreamCard key={idx} stream={stream} />
          ))}
        </div>
      </section>
    </main>
  );
}
