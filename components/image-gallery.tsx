import { memo, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@heroui/react";
import type { GalleryItem } from "@/components/projects/types";

interface ImageGalleryProps {
  images: readonly (string | GalleryItem)[];
}

type NormalizedItem =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; poster?: string };

const normalize = (items: readonly (string | GalleryItem)[]): NormalizedItem[] =>
  items.map((it) => {
    if (typeof it === "string") return { kind: "image", src: it };
    if ((it as any).type === "video") return { kind: "video", src: (it as any).src, poster: (it as any).poster };
    return { kind: "image", src: (it as any).src };
  });

const ImageGallery = memo(({ images }: ImageGalleryProps) => {
  const media = useMemo(() => normalize(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const active = media[activeIndex];

  return (
    <div className="w-full">
      {/* Main viewer */}
      <div className="relative w-full overflow-hidden rounded-xl border border-white/15">
        <div className="relative w-full">
          <Skeleton
            className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px]"
            isLoaded={loaded}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.0, y: 8 }}
                animate={{ opacity: 1.0, y: 0 }}
                exit={{ opacity: 0.0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                {active.kind === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={active.src}
                    alt={`Media ${activeIndex + 1}`}
                    className="w-full h-auto object-contain"
                    onLoad={() => setLoaded(true)}
                  />
                ) : (
                  <video
                    controls
                    playsInline
                    poster={active.poster}
                    className="w-full h-auto"
                    onLoadedData={() => setLoaded(true)}
                  >
                    <source src={active.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </motion.div>
            </AnimatePresence>
          </Skeleton>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {media.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setActiveIndex(i);
              setLoaded(false);
            }}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition
              ${i === activeIndex ? "border-cyan-400" : "border-white/15 hover:border-white/30"}`}
            aria-label={`View media ${i + 1}`}
          >
            {item.kind === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.poster ?? ""}
                  alt={`Video thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full px-2.5 py-1 text-xs bg-black/60 text-white">▶</span>
                </span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
});

export default ImageGallery;
ImageGallery.displayName = "ImageGallery";

ImageGallery.displayName = "ImageGallery";
