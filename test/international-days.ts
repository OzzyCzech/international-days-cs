import test from 'ava';
import {getInternationalDays} from '../lib/international-days.js';

test('Check Světový den míru', t => {
	const days = getInternationalDays(new Date('2021-01-01'));
	t.is(days?.length, 1);

	if (days && days.length > 0 && days[0]) {
		t.is(days![0].name, 'Světový den míru');
		t.is(days![0].icon, '🕊️');
	} else {
		t.fail('No days found');
	}
});
