/**
 * @jest-environment jsdom
 */

const buttonClick = require("/workspace/jest-test/scripts/tests/button");

// ----------------------------------------------------------------------------- Eaxample 1

// beforeEach(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// describe("DOM Tests", () => {
//     test("expects p content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You clicked the button!");
//     });
// });

// ----------------------------------------------------------------------------- Eaxample 2

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM Tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked the button!");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});