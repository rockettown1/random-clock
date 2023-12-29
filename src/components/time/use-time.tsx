import React from "react";
import { getWords } from "./converter";

export const useTime = () => {
  const [minutesToHighlight, setMinutesToHighlight] = React.useState(["IT'S"]);
  const [hoursToHighlight, setHoursToHighlight] = React.useState<string[]>([]);
  const INTERVAL = 30000;

  //   first load
  React.useEffect(() => {
    const { newMinutes, newHours } = getWords();
    setMinutesToHighlight(newMinutes);
    setHoursToHighlight(newHours);
  }, []);

  //   Updates every 30 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      const { newMinutes, newHours } = getWords();
      setMinutesToHighlight(newMinutes);
      setHoursToHighlight(newHours);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return {
    minutesToHighlight,
    hoursToHighlight,
  };
};
