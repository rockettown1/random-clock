import { getTime } from "./get-time";

export const pastTo = (minutes: number) => {
  switch (true) {
    case minutes <= 30 && minutes > 0:
      return "PAST";
    case minutes > 30 && minutes < 60:
      return "TO";
    default:
      return null;
  }
};

export const showMinutes = (minutes: number) => {
  switch (true) {
    case minutes === 5 || minutes === 55:
      return ["FIVE", "MINUTES"];
    case minutes === 10 || minutes === 50:
      return ["TEN", "MINUTES"];
    case minutes === 15 || minutes === 45:
      return ["QUARTER"];
    case minutes === 20 || minutes === 40:
      return ["TWENTY"];
    case minutes === 30:
      return ["HALF"];
    case minutes === 35 || minutes === 25:
      return ["TWENTY", "FIVE", "MINUTES"];
    default:
      return null;
  }
};

export const showHours = (minutes: number, hours: number) => {
  const hoursMap: { [k: number]: string } = {
    1: "ONE",
    2: "TWO",
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    6: "SIX",
    7: "SEVEN",
    8: "EIGHT",
    9: "NINE",
    10: "TEN",
    11: "ELEVEN",
    12: "TWELVE",
  };

  if (minutes < 5) {
    return [hoursMap[hours], "O'CLOCK"];
  }

  if (minutes > 30 && hours < 12) {
    return [hoursMap[hours + 1]];
  }

  if (minutes > 30 && hours === 12) {
    return [hoursMap[1]];
  }

  return [hoursMap[hours]];
};

export const getWords = () => {
  const { minutes, hours } = getTime();
  const roundedMinutes = Math.floor(minutes / 5) * 5; // nearest 5 mins
  const joiner = pastTo(roundedMinutes);
  const mins = showMinutes(roundedMinutes);
  const hour = showHours(roundedMinutes, hours);

  const newMinutes = ["IT'S"];
  if (joiner) {
    newMinutes.push(joiner);
  }
  if (mins) {
    newMinutes.push(...mins);
  }
  const newHours = [];

  if (hour) {
    newHours.push(...hour);
  }

  return { newMinutes, newHours };
};
