import { convertTimeStamp } from "./formatTime";

export const sortOrder = (item) => {
  const copyOrder = [...item];
  console.log(copyOrder, "ORDER");
  return copyOrder.sort((a, b) => convertTimeStamp(a.updatedAt)- convertTimeStamp(b.updatedAt));
};