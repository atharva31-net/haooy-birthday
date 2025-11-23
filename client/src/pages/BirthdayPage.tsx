import Hero from "@/components/birthday/Hero";
import Letter from "@/components/birthday/Letter";
import Gallery from "@/components/birthday/Gallery";
import BhaukalBeauty from "@/components/birthday/BhaukalBeauty";
import VideoSection from "@/components/birthday/VideoSection";
import CountdownOverlay from "@/components/birthday/CountdownOverlay";

export default function BirthdayPage() {
  // 1. TARGET DATE: When does the site unlock? (Her Birthday)
  // Set to November 25, 2025 at midnight (start of the day)
  const birthdayDate = new Date('2025-11-25T00:00:00'); 

  // 2. START DATE: When did you start dating?
  // Example: new Date('2023-05-15')
  const relationshipStartDate = new Date('2023-01-01');

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20">
      {/* The Countdown Overlay - Blocks access until birthdayDate */}
      {/* <CountdownOverlay targetDate={birthdayDate} /> */}
      
      <Hero />
      
      <Letter />
      <Gallery />
      <BhaukalBeauty />
      <VideoSection />
      
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}
