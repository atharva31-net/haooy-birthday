import { motion } from "framer-motion";
import photo1 from "@assets/WhatsApp Image 2025-11-23 at 11.08.12 PM_1763919604345.jpeg";
import photo2 from "@assets/3_1763919610467.jpeg";
import photo3 from "@assets/2_1763920586256.jpeg";
import photo4 from "@assets/4_1763919633102.jpeg";

const photos = [
  { src: photo1, alt: "My favorite", caption: "Pretty in purple", rotation: -2 },
  { src: photo2, alt: "Saree", caption: "Stunning", rotation: 3 },
  { src: photo3, alt: "Colors", caption: "Vibrant soul", rotation: -1 },
  { src: photo4, alt: "Mirror selfie", caption: "Cutest smile", rotation: 2 },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">My Favourite Photos of Yours</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Just a few snapshots of the beautiful moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              style={{ rotate: `${photo.rotation}deg` }}
            >
              <div className="bg-white p-3 pb-12 shadow-lg rounded-sm transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:rotate-0">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-2">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-2xl text-center text-foreground/80 absolute bottom-4 left-0 right-0">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
