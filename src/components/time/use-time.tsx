import React from "react";
import { getWords, pastTo, showHours, showMinutes } from "./converter";
import { getTime } from "./get-time";

export const useTime = () => {
  const [minutesToHighlight, setMinutesToHighlight] = React.useState(["IT IS"]);
  const [hoursToHighlight, setHoursToHighlight] = React.useState<string[]>([]);
  const MINUTE = 60000;

  //   first load
  React.useEffect(() => {
    const { joiner, mins, hour } = getWords();

    const tempMins = ["IT IS"];
    if (joiner) {
      tempMins.push(joiner);
    }
    if (mins) {
      tempMins.push(...mins);
    }
    const tempHours = [];

    if (hour) {
      tempHours.push(...hour);
    }
    setHoursToHighlight(tempHours);
    setMinutesToHighlight(tempMins);
  }, []);

  //   Updates every 60 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      const { joiner, mins, hour } = getWords();

      const tempMins = ["IT IS"];
      if (joiner) {
        tempMins.push(joiner);
      }
      if (mins) {
        tempMins.push(...mins);
      }
      const tempHours = [];

      if (hour) {
        tempHours.push(...hour);
      }
      setHoursToHighlight(tempHours);
      setMinutesToHighlight(tempMins);
    }, MINUTE);

    return () => clearInterval(interval);
  }, []);

  return {
    minutesToHighlight,
    hoursToHighlight,
  };
};
