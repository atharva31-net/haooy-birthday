import Hero from "@/components/birthday/Hero";
import Letter from "@/components/birthday/Letter";
import Gallery from "@/components/birthday/Gallery";
import VideoSection from "@/components/birthday/VideoSection";

export default function BirthdayPage() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20">
      <Hero />
      <Letter />
      <Gallery />
      <VideoSection />
      
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}
