import data from './international-days.json';

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
	const key = getKey(date);
	return internationalDays.filter(day => {
		// Day has a shift
		if (day.shift) {
			const shiftDate = shiftToDate(day.shift, date.getFullYear());
			return (shiftDate.getMonth() === date.getMonth() && shiftDate.getDate() === date.getDate());
		}

		return (day.date === key);
	});
}

/**
 * Get the key for the given date
 * Key is a string in the format MM-dd
 * @param date
 */
function getKey(date: Date): string {
	return `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

const weeks = ['prvn', 'druh', 'třet', 'čtvrt'];
const days = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
const months = ['lednu', 'únoru', 'březnu', 'dubnu', 'květnu', 'červnu', 'červenci', 'srpnu', 'září', 'říjnu', 'listopadu', 'prosinci'];

/**
 * Transform shift text to javascript date
 * @param shift e.g. "první pondělí v lednu"
 * @param year
 */
export function shiftToDate(shift: string, year: number | undefined): Date {
	year ??= new Date().getFullYear(); // Current year
	shift = shift.trim().toLowerCase(); // Normalize

	const regex = new RegExp(`(?<w>${weeks.join('|')}|posledn)[íýéá]\\s+(?<d>${days.join('|')})\\s+v\\s+(?<m>${months.join('|')})`);
	const {w, d, m} = regex.exec(shift)?.groups ?? {};

	if (!w || !d || !m) {
		throw new Error(`Invalid shift format: ${shift}`);
	}

	const week = w === 'poslední' ? 4 : weeks.indexOf(w) + 1;
	const day = days.indexOf(d);
	const month = months.indexOf(m);

	const date = new Date(year, month, 1);
	date.setDate(1 + ((7 + day - date.getDay()) % 7) + (7 * (week - 1)));

	return date;
}
