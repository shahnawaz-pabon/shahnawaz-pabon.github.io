import React from "react";

import useReadingProgress from "../../hooks/useReadingProgress";
import "./reading-progress.css";

/** A thin bar under the navbar showing how much of the article is left. */
export default function ReadingProgress({ targetRef }) {
  const progress = useReadingProgress(targetRef);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div
        className="reading-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
