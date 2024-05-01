const formatTime = (time) => {
  const timeStr = time.toLocaleTimeString().split(" ");
  const mer = timeStr[1];

  const timeString = timeStr[0].split(":");

  const hours = parseInt(timeString[0]);
  const minutes = timeString[1].padStart(2, "0");

  if (mer === "AM") return `${timeString[0].padStart(2, "0")}:${minutes}`;
  else return `${hours + 12}:${minutes}`;
};

export default formatTime;
