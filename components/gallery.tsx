"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const firstImage = galleryImages[0];
  const restImages = galleryImages.slice(1);

  return (
    <section className="py-24 lg:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Gallery
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Moments <span className="text-primary">Captured</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Glimpses from our events, hackathons, workshops, and memorable
            gatherings.
          </p>
        </motion.div>

        {/* Masonry grid */}
        {galleryImages.length > 0 ? (
          <>
            {/* First (hero) image centered */}
            {firstImage && (
              <motion.div
                key={firstImage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl mb-6 max-w-5xl mx-auto"
                onClick={() => setSelectedImage(firstImage)}
              >
                <div className="relative aspect-[16/9] sm:aspect-[16/8]">
                  <Image
                    src={firstImage.src || "/placeholder.svg"}
                    alt={firstImage.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    crossOrigin="anonymous"
                    quality={85}
                    loading="eager"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-mono text-primary uppercase tracking-wider">
                      {firstImage.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">
                      {firstImage.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors" />
                </div>
              </motion.div>
            )}

            {/* Remaining grid */}
            {restImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {restImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.12 + 0.1 * index }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        crossOrigin="anonymous"
                        quality={80}
                        loading={index < 2 ? "eager" : "lazy"}
                        priority={index < 2}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          {image.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">
                          {image.title}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No glimpses are available.
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm font-mono text-primary uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-1">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
