import Hero from "@/components/birthday/Hero";
import Letter from "@/components/birthday/Letter";
import Gallery from "@/components/birthday/Gallery";
import VideoSection from "@/components/birthday/VideoSection";
import CountdownOverlay from "@/components/birthday/CountdownOverlay";

export default function BirthdayPage() {
  // Set the target date here! 
  // For now, I've set it to 24 hours from now so you can see the countdown.
  // Change this to her actual birthday, e.g., new Date('2025-11-24T00:00:00')
  const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20">
      <CountdownOverlay targetDate={targetDate} />
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
