import { describe, expect, it } from "vitest";
import data from "../lib/international-days.json";

describe("Icon Assignment Check", () => {
	for (const day of data) {
		it(`should have an icon for ${day.name}`, () => {
			expect(day.icon).toBeDefined();
		});
	}
});
