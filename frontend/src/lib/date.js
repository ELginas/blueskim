const pad = (num, n) => String(num).padStart(n, "0");

export const longDateFormat = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${month} ${day}, ${year} ${pad(hours, 2)}:${pad(minutes, 2)}`;
};

export const shortDateFormat = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${pad(hours, 2)}:${pad(minutes, 2)}`;
};
