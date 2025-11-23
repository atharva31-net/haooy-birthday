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

          <div className="font-serif space-y-6 text-lg md:text-xl text-foreground/80 leading-loose text-left">
            <p className="font-bold text-2xl mb-6">
              Dear Harshita ❤️
            </p>
            <p>
              Happiest Birthday to you hope this puts a smile on your face cause you look the prettiest with it. I know letters and large paragraphs are not your thing and writing it in english is barely our thing but woh thoda jyada prettyy lgega isliye i will say it to you in English only.
            </p>
            <p>
              You have been someone who has filled my empty spaces the one who taught me many things I have grown with you and this connection feels very special. through the ups and downs through the bright and dark through the rough and smooth I want to be with you.
            </p>
            <p>
              There have been many times where I didn't get you things what you like or dont like what are the things you desire what are the things you dont but I am still learning, you have been by far the most beutiful element I have studied yes even more than the boring law, constituion I read.
            </p>
            <p>
              Stay free Harshita stay happy stay blessed and also work Hard!! very Hard!!
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
