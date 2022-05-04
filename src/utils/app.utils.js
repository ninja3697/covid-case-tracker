export const epochToDate = (utcSeconds) => {
  let date = new Date(0);
  date.setUTCSeconds(utcSeconds);
  return date.toLocaleString();
};
