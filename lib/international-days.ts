import { getDateKey } from "./get-date-key.js";
import data from "./international-days.json" with { type: "json" };
import { shiftToDate } from "./shift-to-date.js";

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
	return internationalDays.filter((day) => {
		// Day has a shift
		if (day.shift) {
			const shiftDate = shiftToDate(day.shift, date.getFullYear());
			return shiftDate.getMonth() === date.getMonth() && shiftDate.getDate() === date.getDate();
		}
		return day.date === key;
	});
}
