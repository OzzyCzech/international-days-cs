import { describe, expect, it } from "vitest";
import { getInternationalDays } from "../lib/index.js";

describe("International Days Tests", () => {
	it("should find 'Světový den míru'", () => {
		const days = getInternationalDays(new Date("2024-01-01"));
		expect(days && days.length > 0).toBe(true);
		const day = days.find((day) => day.name === "Světový den míru");
		expect(day?.name).toBe("Světový den míru");
	});

	it("should find 'Mezinárodní den epidemické připravenosti'", () => {
		const days = getInternationalDays(new Date("2024-12-27"));
		const day = days.find((day) => day.name === "Mezinárodní den epidemické připravenosti");
		expect(day?.name).toBe("Mezinárodní den epidemické připravenosti");
	});
});
