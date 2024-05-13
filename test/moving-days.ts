import test from 'ava';
import {getInternationalDays} from '../lib/index.js';

test('Den uklízení pracovních stolů (2024)', t => {
	const days = getInternationalDays(new Date('2024-01-08'));
	const day = days.find(day => day.name === 'Den uklízení pracovních stolů');
	t.is(day?.name, 'Den uklízení pracovních stolů');
});

test('Den uklízení pracovních stolů (2025)', t => {
	const days = getInternationalDays(new Date('2025-01-13'));
	const day = days.find(day => day.name === 'Den uklízení pracovních stolů');
	t.is(day?.name, 'Den uklízení pracovních stolů');
});

test('Den matek (2024)', t => {
	const days = getInternationalDays(new Date('2024-05-12'));
	const day = days.find(day => day.name === 'Den matek');
	t.is(day?.name, 'Den matek');
});

test('Den matek (2025)', t => {
	const days = getInternationalDays(new Date('2025-05-11'));
	const day = days.find(day => day.name === 'Den matek');
	t.is(day?.name, 'Den matek');
});
