import { expect } from "chai";
import { reverseBits } from "../index.js";

describe("Reverse binary",()=>{
    describe("Check the input", () => {
        it("Should return false if input is not a number ", () => {
            expect(reverseBits()).equal(false);
        });
    });
});
