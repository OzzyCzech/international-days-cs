import { describe, expect, it } from "vitest";
import { getInternationalDays } from "../lib";

describe("International Days Tests", () => {
	it("Den uklízení pracovních stolů (2024)", () => {
		const days = getInternationalDays(new Date("2024-01-08"));
		const day = days.find((day) => day.name === "Den uklízení pracovních stolů");
		expect(day?.name).toBe("Den uklízení pracovních stolů");
	});

	it("Den uklízení pracovních stolů (2025)", () => {
		const days = getInternationalDays(new Date("2025-01-13"));
		const day = days.find((day) => day.name === "Den uklízení pracovních stolů");
		expect(day?.name).toBe("Den uklízení pracovních stolů");
	});

	it("Den uklízení pracovních stolů (2026)", () => {
		const days = getInternationalDays(new Date("2026-01-12"));
		const day = days.find((day) => day.name === "Den uklízení pracovních stolů");
		expect(day?.name).toBe("Den uklízení pracovních stolů");
	});

	it("Den matek (2024)", () => {
		const days = getInternationalDays(new Date("2024-05-12"));
		const day = days.find((day) => day.name === "Den matek");
		expect(day?.name).toBe("Den matek");
	});

	it("Den matek (2025)", () => {
		const days = getInternationalDays(new Date("2025-05-11"));
		const day = days.find((day) => day.name === "Den matek");
		expect(day?.name).toBe("Den matek");
	});

	it("Black Friday (2024)", () => {
		const days = getInternationalDays(new Date("2024-11-29"));
		const day = days.find((day) => day.name === "Black Friday");
		expect(day?.name).toBe("Black Friday");
	});
});
