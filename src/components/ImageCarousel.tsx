"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

/**
 * Optimized carousel: only preloads current ±1 images.
 * Thumbnails use native lazy loading + small sizes.
 */
export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(new Set([0]));
  const thumbRef = useRef<HTMLDivElement>(null);

  // Preload current ± 1 neighbors
  useEffect(() => {
    const toLoad = [current];
    if (current > 0) toLoad.push(current - 1);
    if (current < images.length - 1) toLoad.push(current + 1);

    setLoadedSet((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const idx of toLoad) {
        if (!next.has(idx)) {
          next.add(idx);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [current, images.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbRef.current) {
      const activeThumb = thumbRef.current.children[current] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [current]);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  if (images.length === 0) return null;

  const shouldLoad = (i: number) => loadedSet.has(i);

  return (
    <div className="relative w-full">
      {/* Main image area */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl glass">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            {/* Loading placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
              <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
            </div>
            <Image
              src={images[current]}
              alt={`${alt} - ${current + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              priority={current === 0}
              loading={current === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows — only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-all hover:scale-110 active:scale-95 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-all hover:scale-110 active:scale-95 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </>
        )}

        {/* Counter badge */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-mono border border-white/10">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip — lazy loaded, scrollable */}
      {images.length > 1 && (
        <div
          ref={thumbRef}
          className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide"
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`relative shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-blue-400 opacity-100 scale-105"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              {shouldLoad(i) || Math.abs(i - current) <= 3 ? (
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-white/[0.04] flex items-center justify-center">
                  <span className="text-[10px] text-white/20 font-mono">{i + 1}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
