import { formats } from "./constansts";

import { getCurrentDay, getDateDateObj, getYear, getMonth, getDaysInMonth } from './dates';

/**
 * 
 * @param date 
 * @param format 
 * @returns 
 */
export function formatDate(date = getCurrentDay(), format = 'regular') {
    switch (format) {
        case formats[0]:
            // Expected output: "2011-10-05T14:48:00.000Z"
            return date.toISOString();
        case formats[1]:
            return getCurrentDay();
        case formats[2]:
            // Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
            // Note: your timezone may vary
            return date.toString();
        default:
            return getCurrentDay()
    }
}

/**
 * 
 * @param date 
 * @param format 
 * @returns 
 */
export function formatCustom(date = getCurrentDay(), format = formats[4]) {
    switch (format) {
        case formats[3]:
            // yyyy/mm/dd
            return getYear(date) + '/' + getMonth(date) + '/' + getDateDateObj(date)
        case formats[4]:
            // dd/mm/yyyy
            return getDateDateObj(date) + '/' + getMonth(date) + '/' + getYear(date)
        case formats[5]:
            // mm/dd/yyyy
            return getMonth(date) + '/' + getDateDateObj(date) + '/' + getYear(date);
        case formats[6]:
            // yyyy-mm-dd
            return getYear(date) + '-' + getMonth(date) + '-' + getDateDateObj(date);
        case formats[7]:
            // dd-mm-yyyy
            return getDateDateObj(date) + '-' + getMonth(date) + '-' + getYear(date);
        case formats[8]:
            // mm-dd-yyyy
            return getMonth(date) + '-' + getDateDateObj(date) + '-' + getYear(date);
        default:
            return date;
    }
}