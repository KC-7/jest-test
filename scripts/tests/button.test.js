/**
 * @jest-environment jsdom
 */

const buttonClick = require("/workspace/jest-test/scripts/tests/button");

beforeEach( () => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM Tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked the button!");
    });
});