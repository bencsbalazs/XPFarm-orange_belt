const { expect } = require("chai");
const { overTheRoad } = require("../lib/2021-06-22-overTheRoad.js");

describe("Testing 2021-06-22-overTheRoad...", () => {
  describe("User story 1", () => {
    it("should return false if no address is given", () => {
      expect(overTheRoad()).equal(false);
    });
    it('should be false if "n" is not a number', () => {
      expect(overTheRoad(1, "a")).equal(false);
    });
  });

  describe("User story 2", () => {
    it("The result should be a number", () => {
      expect(typeof overTheRoad(1, 3)).equal("number");
    });
    it("should be the correct number", () => {
      expect(overTheRoad(1, 3)).equal(6);
    });
  });
});
