import React, { useEffect, useRef } from "react";

import "./lottie.css";

/**
 * Wrapper around a Lottie animation.
 *
 * `lottie-web` touches `document` the moment it is imported, which is what
 * broke `gatsby build`: the module was pulled into the server-side render
 * bundle, so rendering the 404 page threw
 * `ReferenceError: document is not defined` and no HTML was ever produced.
 *
 * Loading it through a dynamic `import()` inside an effect keeps it in a
 * client-only chunk that the server never evaluates.
 */
export default function LottieAnimation({
  animationData,
  loop = true,
  className = "",
  label,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation = null;
    let isCancelled = false;

    import("lottie-web")
      .then(({ default: lottie }) => {
        // The effect may have been cleaned up while the chunk was loading.
        if (isCancelled) return;

        animation = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop,
          autoplay: !reducedMotion.matches,
          animationData,
        });

        if (reducedMotion.matches) {
          animation.addEventListener("DOMLoaded", () => {
            animation.goToAndStop(0, true);
          });
        }
      })
      .catch(() => {
        // A missing animation is cosmetic; leave the container empty.
      });

    return () => {
      isCancelled = true;
      if (animation) animation.destroy();
    };
  }, [animationData, loop]);

  return (
    <div
      ref={containerRef}
      className={`lottie ${className}`.trim()}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
    />
  );
}
