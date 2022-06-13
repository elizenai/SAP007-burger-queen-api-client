export const filterProducts = (data, type) =>  {
  return data.filter((item) => item.type === type);
};