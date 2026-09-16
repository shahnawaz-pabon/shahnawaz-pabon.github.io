import React, { useEffect, useState } from "react";

import "./typewriter.css";

/**
 * Types and deletes through a list of role titles.
 *
 * Replaces `typed.js`: the effect is a single timeout chain, so there is no
 * extra dependency, it stops cleanly on unmount, and it honours
 * `prefers-reduced-motion` by settling on the first title instead of animating.
 */
export default function Typewriter({
  strings,
  typeSpeed = 65,
  deleteSpeed = 32,
  holdTime = 1800,
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (isReduced || strings.length === 0) return undefined;

    const current = strings[index % strings.length];
    const isComplete = text === current;
    const isEmpty = text === "";

    let delay = isDeleting ? deleteSpeed : typeSpeed;
    if (isComplete && !isDeleting) delay = holdTime;
    if (isEmpty && isDeleting) delay = typeSpeed / 2;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setIsDeleting(true);
        return;
      }

      const next = current.slice(0, text.length - 1);
      setText(next);
      if (next === "") {
        setIsDeleting(false);
        setIndex((value) => value + 1);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    text,
    isDeleting,
    index,
    strings,
    typeSpeed,
    deleteSpeed,
    holdTime,
    isReduced,
  ]);

  const visible = isReduced ? (strings[0] ?? "") : text;

  return (
    <span className="typewriter">
      {/* The animation is decorative; assistive tech gets the stable title
          below rather than every intermediate frame. */}
      <span aria-hidden="true">{visible}</span>
      <span aria-hidden="true" className="typewriter__caret" />
      <span className="visually-hidden">{strings[0]}</span>
    </span>
  );
}
