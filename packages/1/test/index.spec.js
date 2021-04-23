import { expect } from "chai"
import { example } from "../index.js"

describe("First try", () => {
    it("Should return true if function called", () => {
        expect(example()).to.be.true
    })
})