import { expect } from "chai";
import { limit } from "../lib/index.js";

describe('Smaller than', () => {
    it("Should return false if there are not only numbers", ()=>{
        expect(limit()).equal(false);
    });
});