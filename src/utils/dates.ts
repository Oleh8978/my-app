
/**
 * get current day 
 */
export function getCurrentDay() {
    return new Date();
}

/**
 *  get current year, or get year from specific day
 * @param date 
 * @returns 
 */
export function getYear(date = new Date()) {
    return date.getFullYear()
}

/**
 * get current month, or get month from specific day
 * @param date 
 * @returns 
 */
export function getMonth(date = new Date()) {
    return date.getMonth()
}

/**
 * get all days in mont, by specific month and year
 * @param month 
 * @param year 
 * @returns 
 */
export function getDaysInMonth(month = getMonth(), year = getYear()) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}