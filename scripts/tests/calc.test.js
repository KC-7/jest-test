/**
 * @jest-environment jsdom
 */

const addition = require("/workspace/jest-test/scripts/tests/calc.js");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", ()=> {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", ()=> {
            expect(addition(42, 31)).toBe(73);
        });
        // test("should return error for 73 + donkey", ()=> {
        //     expect(addition(73, "donkey")).toBe(error);
        // });
    });
    // describe("Subtraction function", () => {

    // });
    // describe("Multiply function", () => {

    // });
    // describe("Division function", () => {

    // });
});