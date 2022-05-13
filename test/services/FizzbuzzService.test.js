const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService", () => {
    test("Calcular trick con resultado en numero", () => {
        const explorer1 = { name: "Dalia", score: 1};
        const sinFizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(sinFizzbuzz.trick).toBe(4)
    })
    test("Calcular trick FIZZ", () => {
        const explorer3 = { name: "Flor", score: 3 };
        const fizz = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(fizz.trick).toBe("FIZZ");
    })
    test("Calcular trick BUZZ", () => {
        const explorer5 = { name: "Esthela", score: 5};
        const buzz = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(buzz.trick).toBe("BUZZ")
    })
    test("Calcular trick FIZZBUZZ", () => {
        const explorer15 = { name: "Manuel", score: 15};
        const fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(fizzbuzz.trick).toBe("FIZZBUZZ")
    })
})