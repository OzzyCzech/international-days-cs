import data from './international-days.json' assert {type: 'json'};

type NationalDay = {
	name: string,
	icon?: string,
	url?: string,
	description?: string,
	since?: number,
}

const internationalDays = data as Record<string, NationalDay[]>;

/**
 * Get names as a string for the given date
 * @param date
 * @param joinWith
 */
export function getNationalDay(date: Date, joinWith = '\n'): string {
	return getNationalDays(date)?.join(joinWith) ?? '';
}

/**
 * Get the names of the name day for the given date
 * @param date
 */
export function getNationalDays(date: Date): NationalDay[] | undefined {
	const key = getKey(date);
	return key in internationalDays ? internationalDays[key] : undefined;
}

/**
 * Get the key for the given date
 * Key is a string in the format ddMM
 * @param date
 */
function getKey(date: Date): string {
	return date.getDate().toString().padStart(2, '0')
		+ (date.getMonth() + 1).toString().padStart(2, '0');
}
