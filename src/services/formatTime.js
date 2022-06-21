import { format } from "date-fns";

export const convertTime = (apiTime) => {
  const date = new Date(apiTime);
  const newDate = format(date, "dd/MM/yy HH:mm");
  return newDate;
};

export const convertTimeStamp = (apiTime) => {
  const date = new Date(apiTime);
  return date.getTime();
};