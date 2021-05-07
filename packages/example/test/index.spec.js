import { expect } from "chai";
import { example } from "../index.js";

describe("The example function", () => {
    it("true if function called", () => {
        expect(example()).equal(true);
    });
});