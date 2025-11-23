import { motion } from "framer-motion";
import video1 from "@assets/WhatsApp Video 2025-11-23 at 11.17.31 PM_1763920386585.mp4";
import video2 from "@assets/WhatsApp Video 2025-11-23 at 11.17.32 PM_1763920386585.mp4";
import video3 from "@assets/WhatsApp Video 2025-11-23 at 11.18.31 PM_1763920386586.mp4";

const videos = [
  { src: video1, caption: "Slaying it!" },
  { src: video2, caption: "Pure Vibes" },
  { src: video3, caption: "Queen Behavior" },
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white p-2 pb-4 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-primary/10">
                <div className="aspect-[9/16] relative rounded-xl overflow-hidden bg-black/5">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    playsInline
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
          ))}
        </div>
      </div>
    </section>
  );
}
