const { expect } = require("chai");
const { quarterOfTheYear } = require("../lib/2021-06-14-quarterOfTheYear.js");

describe("Testing 2021-06-14-quarterOfTheYear", () => {
  describe("User story 1", () => {
    it("Should be false if the parameter is not integer", () => {
      expect(quarterOfTheYear("not number")).equal(false);
    });
    it("Should be false if the parameter is greater than 12", () => {
      expect(quarterOfTheYear(13)).equal(false);
    });
  });

  describe("User story 2", () => {
    it("Accepted if the result is between 1-4", () => {
      expect(quarterOfTheYear(2)).lessThan(4);
    });
    it("Accepted if the result is 2", () => {
      expect(quarterOfTheYear(2)).equals(2);
    });
  });
});
