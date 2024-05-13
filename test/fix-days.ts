import test from 'ava';
import {getInternationalDays} from '../lib/index.js';

test('Světový den míru', t => {
	const days = getInternationalDays(new Date('2024-01-01'));
	t.true(days && days.length > 0, 'No days found');
	const day = days.find(day => day.name === 'Světový den míru');
	t.is(day?.name, 'Světový den míru');
});

test('Mezinárodní den epidemické připravenosti', t => {
	const days = getInternationalDays(new Date('2024-12-27'));

	const day = days.find(day => day.name === 'Mezinárodní den epidemické připravenosti');
	t.is(day?.name, 'Mezinárodní den epidemické připravenosti');
});
