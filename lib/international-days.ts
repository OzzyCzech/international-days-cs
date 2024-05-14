import data from './international-days.json';
import {shiftToDate} from './shift-to-date.js';
import {getDateKey} from './get-date-key.js';

type InternationalDay = {
	name: string;
	icon?: string; // Emoji
	url?: string;
	since?: number; // E.g. 1982
	date?: string; // E.g. "12-31" (December 31)
	shift?: string; // E.g. "první pondělí v lednu"
	description?: string;
};

const internationalDays = data as InternationalDay[];

/**
 * Return list of international days for the given date
 * @param date
 */
export function getInternationalDays(date: Date): InternationalDay[] {
	const key = getDateKey(date);
	return internationalDays.filter(day => {
		// Day has a shift
		if (day.shift) {
			const shiftDate = shiftToDate(day.shift, date.getFullYear());
			return (shiftDate.getMonth() === date.getMonth() && shiftDate.getDate() === date.getDate());
		}

		return (day.date === key);
	});
}

//
// /**
//  *
//  * @param date
//  */
// export function getInternationalDaysString(date: Date): string {
// 	const days = getInternationalDays(date);
// 	// iterate over all days joun names and return them
// 	return days.map(day => `${day.icon} ${day.name}`).join('\n');
// }
