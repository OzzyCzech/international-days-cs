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

	it("should find 'Den skořicových šneků'", () => {
		const days = getInternationalDays(new Date("2024-10-04"));
		const day = days.find((day) => day.name === "Den skořicových šneků");
		expect(day?.name).toBe("Den skořicových šneků");
		expect(day?.icon).toBe("🥐");
		expect(day?.url).toBe("https://www.skandinavskydum.cz/4-10-den-skoricovych-sneku/");
	});
});
