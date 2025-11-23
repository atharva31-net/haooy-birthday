import { motion } from "framer-motion";
import { Play, Music } from "lucide-react";
import thumbnail from "@assets/generated_images/acoustic_guitar_in_warm_lighting.png";

export default function VideoSection() {
  return (
    <section className="py-24 px-4 bg-background relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Music className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">A Song For You</span>
            <Music className="w-5 h-5" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Just for You</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          {/* This is a placeholder structure for where the video would go */}
          {/* In a real app, this would be a <video> tag or iframe */}
          <img 
            src={thumbnail} 
            alt="Guitar Video Thumbnail" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-300" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
            <h3 className="text-white font-medium text-xl">Me playing your favorite song</h3>
            <p className="text-white/70 text-sm">Recorded with love</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
