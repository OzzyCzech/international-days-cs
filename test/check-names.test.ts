import { describe, expect, it } from "vitest";
import data from "../lib/international-days.json";

describe("Format Check", () => {
	const keys = ["name", "icon", "date", "shift", "since", "url", "description"];

	for (const day of data) {
		it(`should have valid keys for ${day.name}`, () => {
			for (const key in day) {
				expect(keys.includes(key)).toBe(true, `Unknown key ${key} in ${day.name}`);
			}
		});
	}
});
