import test from "ava";
import data from "../lib/international-days.json";

test("Kontrola přiřazení ikon", (t) => {
	for (const day of data) {
		t.true(day.icon !== undefined, `Icon not found for ${day.name}`);
	}
});
