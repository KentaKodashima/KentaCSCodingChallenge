/**
   * Convert a date to UTC
   * NOTE: Date object automatically includes local timezone offset by its nature.
   * @param { Date } date - Date object.
  */
 export const convertDateToUTC = (date) => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
};

/**
 * Convert a month number into 3 letters string format.
 * @param { number } month - A month in number format.
*/
export const formatMonth = (month) => {
  let monthString

  switch (month) {
    case 1:
      monthString = 'Jan'
      break
    case 2:
      monthString = 'Feb'
      break
    case 3:
      monthString = 'Mar'
      break
    case 4:
      monthString = 'Apr'
      break
    case 5:
      monthString = 'May'
      break
    case 6:
      monthString = 'Jun'
      break
    case 7:
      monthString = 'Jul'
      break
    case 8:
      monthString = 'Aug'
      break
    case 9:
      monthString = 'Sep'
      break
    case 10:
      monthString = 'Oct'
      break
    case 11:
      monthString = 'Nov'
      break
    case 12:
      monthString = 'Dec'
      break
    default:
      monthString = ''
      break
    }

    return monthString
  };