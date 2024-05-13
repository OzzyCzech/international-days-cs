import data from './international-days.json';

type InternationalDay = {
	name: string;
	icon?: string;
	url?: string;
	since?: number;
	description?: string;
};

const internationalDays = data as Record<string, InternationalDay[]>;

/**
 * Return list of international days for the given date
 * @param date
 */
export function getInternationalDays(date: Date): InternationalDay[] | undefined {
	const key = getKey(date);
	return key in internationalDays ? internationalDays[key] : undefined;
}

/**
 * Get the key for the given date
 * Key is a string in the format dd-MM
 * @param date
 */
function getKey(date: Date): string {
	return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
}
