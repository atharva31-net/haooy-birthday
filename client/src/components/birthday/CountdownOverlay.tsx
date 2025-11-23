import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { differenceInSeconds, formatDuration, intervalToDuration } from "date-fns";
import { Volume2, VolumeX } from "lucide-react";
import bgVideo from "@assets/WhatsApp Video 2025-11-23 at 11.11.00 AM_1763876590251.mp4";

interface CountdownOverlayProps {
  targetDate: Date;
}

export default function CountdownOverlay({ targetDate }: CountdownOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function calculateTimeLeft() {
    const now = new Date();
    const diff = differenceInSeconds(targetDate, now);
    return diff > 0 ? diff : 0;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
      
      if (remaining <= 0) {
        setIsOpen(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Handle volume control
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.2; // Set volume to 20%
      }
      setIsMuted(videoRef.current.muted);
    }
  };

  // Convert seconds to duration object for display
  const duration = intervalToDuration({ start: 0, end: timeLeft * 1000 });

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center text-center p-4 overflow-hidden"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>
          
          {/* Volume Control */}
          <button 
            onClick={toggleMute}
            className="absolute top-8 right-8 z-50 p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 transition-colors"
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-8 drop-shadow-lg">
              Wait for it...
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-foreground">
              <TimeUnit value={duration.days || 0} label="Days" />
              <TimeUnit value={duration.hours || 0} label="Hours" />
              <TimeUnit value={duration.minutes || 0} label="Minutes" />
              <TimeUnit value={duration.seconds || 0} label="Seconds" />
            </div>

            <p className="mt-12 text-white/90 font-script text-2xl animate-pulse drop-shadow-md">
              The surprise unlocks soon ❤️
            </p>
            <p className="mt-4 text-white/80 font-serif text-lg italic drop-shadow-md">
              Please wait Harshita
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-md shadow-xl rounded-xl flex items-center justify-center border border-white/40">
        <span className="text-3xl md:text-4xl font-serif text-primary font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-white font-semibold drop-shadow-sm">
        {label}
      </span>
    </div>
  );
}
