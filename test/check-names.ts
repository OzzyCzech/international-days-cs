import test from "ava";
import data from "../lib/international-days.json";

test("Kontrola formatu", (t) => {
	const keys = ["name", "icon", "date", "shift", "since", "url", "description"];

	// check every day in the data
	for (const day of data) {
		for (const key in day) {
			t.true(keys.includes(key), `Unknown key ${key} in ${day.name}`);
		}
	}
});
