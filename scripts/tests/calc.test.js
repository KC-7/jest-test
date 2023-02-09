const addition = require("/workspace/jest-test/scripts/tests/calc.js");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", ()=> {
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});