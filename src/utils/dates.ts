import { formatDate } from './formatters'
import { formats, daysWeek, monthNames, shortNameMonth } from './constansts'

/**
 * get current day 
 */
export function getCurrentDay() {
    return new Date();
}

/**
 * @param date 
 * @returns 
 */
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
 * short date of the week
 * @param date 
 * @returns 
 */
export function getShortDayWeek(date = getCurrentDay()) {
    return date.toString().split(' ')[0];
}

export function getLongDayOfWeek(date = getCurrentDay()) {
    return daysWeek[date.getDay()]
}


/**
 * get long name of month 
 * @param month 
 * @returns 
 */
export function monthLong(month: number) {
    return monthNames[month - 1]
}

/**
 *  get short name of the month 
 * @param month 
 * @returns 
 */
export function monthShort(month: number) {
    return shortNameMonth[month - 1]
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
        days.push({
            iso: formatDate(new Date(date), formats[0]),
            regular: formatDate(new Date(date), formats[1]),
            ymd: formatDate(new Date(date), formats[3]),
            dmy: formatDate(new Date(date), formats[4]),
            mdy: formatDate(new Date(date), formats[5]),
            dymd: formatDate(new Date(date), formats[6]),
            ddmy: formatDate(new Date(date), formats[7]),
            dmdy: formatDate(new Date(date), formats[8]),
            year: getYear(new Date(date)),
            month: getMonth(new Date(date)),
            monthStringLong: monthLong(month),
            monthStringShort: monthShort(month),
            shortDayOfWeek: getShortDayWeek(new Date(date)),
            longDayOfWeek: getLongDayOfWeek(new Date(date)),
            seconds: new Date(date).getTime()
        });
        date.setDate(date.getDate() + 1);
    }
    return days;
}