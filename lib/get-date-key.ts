/**
 * Get the key for the given date
 * Key is a string in the format MM-dd
 * @param date
 */
export function getDateKey(date: Date): string {
	return `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

