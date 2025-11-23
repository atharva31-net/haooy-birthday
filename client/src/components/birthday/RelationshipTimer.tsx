import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { intervalToDuration } from "date-fns";
import { Heart } from "lucide-react";

interface RelationshipTimerProps {
  startDate: Date;
}

export default function RelationshipTimer({ startDate }: RelationshipTimerProps) {
  const [duration, setDuration] = useState(intervalToDuration({ start: startDate, end: new Date() }));

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(intervalToDuration({ start: startDate, end: new Date() }));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <section className="py-16 px-4 bg-white/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 text-primary mb-6">
          <Heart className="w-5 h-5 fill-current animate-pulse" />
          <span className="text-sm font-medium tracking-widest uppercase">Loving You For</span>
          <Heart className="w-5 h-5 fill-current animate-pulse" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <TimeCard value={duration.years || 0} label="Years" />
          <TimeCard value={duration.months || 0} label="Months" />
          <TimeCard value={duration.days || 0} label="Days" />
          <TimeCard value={duration.hours || 0} label="Hours" />
        </div>
        
        <p className="mt-8 text-muted-foreground font-serif italic">
          ...and every second has been magic.
        </p>
      </motion.div>
    </section>
  );
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <span className="text-4xl md:text-5xl font-serif text-foreground mb-2">
        {value}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
