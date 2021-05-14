import { expect } from "chai";
import { reverseBits } from "../index.js";

describe("Reverse binary", () => {
  describe("Check the input", () => {
    it("Should return false if input is not a number ", () => {
      expect(reverseBits("123")).equal(false);
    });

    it("Should return false if input is negative", () => {
      expect(reverseBits(-123)).equal(false);
    });
  });

  describe("check the output", () => {
    it("should be a number", () => {
      expect(reverseBits(123)).equal(111);
    });
  });
});
