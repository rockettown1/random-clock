import { useState, useEffect } from "react";

export const useHighlight = (word: string, wordsToHighlight: string[]) => {
  const [highlight, setHighlight] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (wordsToHighlight.includes(word)) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [wordsToHighlight]);

  useEffect(() => {
    if (shouldAnimate && !highlight) {
      setShouldAnimate(false);
    } else if (!shouldAnimate && highlight) {
      setShouldAnimate(true);
    }
  }, [highlight]);

  return { highlight, shouldAnimate };
};
