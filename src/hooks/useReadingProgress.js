import { useEffect, useState } from "react";

/**
 * How far through the article the reader has scrolled, as 0 to 1.
 *
 * Scroll events are coalesced into an animation frame: without that, a fast
 * scroll fires hundreds of layout reads per second.
 */
export default function useReadingProgress(targetRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return undefined;

    let frame = 0;

    const measure = () => {
      frame = 0;

      const total = element.offsetHeight - window.innerHeight;
      // Short articles fit on one screen: treat them as fully read.
      if (total <= 0) {
        setProgress(1);
        return;
      }

      const scrolled = window.scrollY - element.offsetTop;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  return progress;
}
