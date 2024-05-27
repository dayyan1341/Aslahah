const formatDate = (date) => {
    // Use Intl.DateTimeFormat to get the date in a consistent format
    const formatter = new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    // Get the formatted date
    const [{ value: day },,{ value: month },,{ value: year }] = formatter.formatToParts(date);
  
    // Combine parts into "YYYY-MM-DD" format
    return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
  };
  
  export default formatDate;
  