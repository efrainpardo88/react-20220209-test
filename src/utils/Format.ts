/**
 * Returns a string with a number format with thousand separator
 *
 * @param  {number} number - number to be formatted
 * @returns string - string with format
 */
const number = (param: number): string => (param.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

export default {
  number,
};
