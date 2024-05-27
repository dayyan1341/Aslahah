const formatTime = (time) => {
  // Use Intl.DateTimeFormat to get the time in a consistent (English) format
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Get the formatted time
  const formattedTime = formatter
    .formatToParts(time)
    .filter((part) => part.type === "hour" || part.type === "minute")
    .map((part) => part.value.padStart(2, "0"));
  
  return `${formattedTime[0]}:${formattedTime[1]}`;
};

export default formatTime;
