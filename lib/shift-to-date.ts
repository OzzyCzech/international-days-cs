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
