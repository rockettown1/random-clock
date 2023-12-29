import React from "react";

export const useHighlight = (word: string, wordsToHighlight: string[]) => {
  const [highlight, setHighlight] = React.useState(false);
  React.useEffect(() => {
    if (wordsToHighlight.includes(word)) {
      setHighlight(true);
    } else {
      setHighlight(false);
    }
  }, [wordsToHighlight]);

  return { highlight };
};
