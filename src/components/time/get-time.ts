import dayjs from "dayjs";

export const getTime = () => {
  const date = new Date();

  const timeString = dayjs(date).format("h:m");
  const [hours, minutes] = timeString.split(":");

  return { hours: parseInt(hours), minutes: parseInt(minutes) };
};
