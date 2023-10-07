
/**
 * get current day 
 */
export function getCurrentDay() {
    return new Date();
}

export function getDateDateObj(date = getCurrentDay()) {
    return date.getDate();
}

/**
 *  get current year, or get year from specific day
 * @param date 
 * @returns 
 */
export function getYear(date = getCurrentDay()) {
    return date.getFullYear()
}

/**
 * get current month, or get month from specific day
 * @param date 
 * @returns 
 */
export function getMonth(date = getCurrentDay()) {
    return date.getMonth() + 1
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