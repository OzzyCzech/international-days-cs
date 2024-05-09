import test from 'ava';
import {DateTime, Duration} from 'luxon';

test('Check Den uklízení pracovních stolů', t => {
	//const date = DateTime.fromISO('2025-01-08'); // second Monday in January 2024

	//const shift = Duration.fromObject({week: 1}, {locale: 'cs'});

	// second monday in january 2024
	const m = DateTime
		.fromObject({year: 2026, month: 1, day: 1})
		.endOf('week')
		.plus({week: 1, days: 1});

	// first monday in january 2024

	console.log(m.toISODate());
	t.true(m.isValid);
});
