import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Letter() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-xl shadow-sm rotate-1"
        >
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Heart className="w-6 h-6 fill-current" />
            </div>
          </div>

          <div className="font-serif space-y-6 text-lg md:text-xl text-foreground/80 leading-loose">
            <p>
              My Dearest,
            </p>
            <p>
              As you read this, I want you to know how incredibly lucky I feel to celebrate another year of your life. You are the melody in my quiet moments and the excitement in my days.
            </p>
            <p>
              Every smile you share lights up the room, and every laugh is my favorite sound. I wanted to make this little corner of the internet just for you—to keep our memories, my words, and my love safe forever.
            </p>
            <p>
              Thank you for being you. For being kind, for being beautiful inside and out, and for choosing me to walk beside you.
            </p>
            <p>
              I love you more than words can say (though I tried my best here!).
            </p>
          </div>

          <div className="mt-12 text-right">
            <p className="font-script text-3xl text-primary rotate-[-2deg] inline-block">
              Forever Yours, <br/> Me
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
