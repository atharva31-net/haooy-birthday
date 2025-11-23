import { motion } from "framer-motion";
import { useRef, useState } from "react";
import video1 from "@assets/WhatsApp Video 2025-11-23 at 11.17.31 PM_1763920386585.mp4";
import video2 from "@assets/WhatsApp Video 2025-11-23 at 11.17.32 PM_1763920386585.mp4";
import video3 from "@assets/WhatsApp Video 2025-11-23 at 11.18.31 PM_1763920386586.mp4";
import { Edit2 } from "lucide-react";

const videos = [
  { src: video1, caption: "Slaying it!" },
  { src: video2, caption: "Pure Vibes" },
  { src: video3, caption: "Queen Behavior" },
];

function VideoCard({ video, index }: { video: { src: string, caption: string }, index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleViewportEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked without interaction
        console.log("Autoplay blocked");
      });
    }
  };

  const handleViewportLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ delay: index * 0.2 }}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      className="group"
    >
      <div className="bg-white p-2 pb-4 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-primary/10">
        <div className="aspect-[9/16] relative rounded-xl overflow-hidden bg-black/5">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4 text-center">
          <p className="font-script text-xl text-foreground/80">{video.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BhaukalBeauty() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 drop-shadow-sm">
            Bhaukal <span className="text-primary italic">Beauty</span>
          </h2>
          <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>

        {/* Editable Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-primary/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium shadow-md flex items-center gap-2">
              <Edit2 className="w-3 h-3" />
              Personal Note
            </div>
            
            <div 
              contentEditable 
              suppressContentEditableWarning
              className="font-serif text-lg md:text-xl text-center text-foreground/80 leading-relaxed outline-none min-h-[100px] empty:before:content-[attr(placeholder)] empty:before:text-muted-foreground"
              placeholder="Write something special about her beauty/swag here... (Click to edit)"
            >
              Tera yun nazrein jhuka ke muskurana, <br/>
              Jaise chaand ka badalon mein chup jaana. <br/>
              Sadgi mein bhi itna kahar dhaati ho, <br/>
              Bina koshish kiye hi dil chura le jaati ho. ✨
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
