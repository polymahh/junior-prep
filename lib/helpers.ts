export const getDate = (inputDate : string) => {
    const inputDateFormat = new Date(inputDate);

    // Extract day, month, and year
    const day = inputDateFormat.getUTCDate();
    const month = inputDateFormat.getUTCMonth() + 1; // Months are zero-based
    const year = inputDateFormat.getUTCFullYear();
  
    // Format the date as DD/MM/YYYY
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  
    return formattedDate;
}