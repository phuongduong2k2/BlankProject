export const ConvertDateString = date => {
  const x = new Date(date);
  const converted = `${x.getFullYear()}-${x.getMonth()}-${x.getDay() + 1}`;
  return converted;
};
