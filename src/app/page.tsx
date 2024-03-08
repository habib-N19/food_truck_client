import Temp from "@/components/Temp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="video-container">
        <video controls>
          <source src="your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </main>
  );
}
