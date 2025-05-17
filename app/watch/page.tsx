import HLSPlayer from "@/components/HLSPlayer";

export default function WatchPage() {
  const playbackURL =
    "https://bf69bb9a6fbd.eu-central-1.playback.live-video.net/api/video/v1/eu-central-1.423623853679.channel.HBouiolQbrCv.m3u8";
  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Live Stream</h1>
      <HLSPlayer src={playbackURL} autoPlay />
    </main>
  );
}
