import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { differenceInSeconds, formatDuration, intervalToDuration } from "date-fns";

interface CountdownOverlayProps {
  targetDate: Date;
}

export default function CountdownOverlay({ targetDate }: CountdownOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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

  // Convert seconds to duration object for display
  const duration = intervalToDuration({ start: 0, end: timeLeft * 1000 });

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 1, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center text-center p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-8">
              Wait for it...
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-foreground">
              <TimeUnit value={duration.days || 0} label="Days" />
              <TimeUnit value={duration.hours || 0} label="Hours" />
              <TimeUnit value={duration.minutes || 0} label="Minutes" />
              <TimeUnit value={duration.seconds || 0} label="Seconds" />
            </div>

            <p className="mt-12 text-muted-foreground font-script text-2xl animate-pulse">
              The surprise unlocks soon ❤️
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
      <div className="w-20 h-20 md:w-24 md:h-24 bg-white shadow-lg rounded-xl flex items-center justify-center border border-primary/20">
        <span className="text-3xl md:text-4xl font-serif text-primary font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
