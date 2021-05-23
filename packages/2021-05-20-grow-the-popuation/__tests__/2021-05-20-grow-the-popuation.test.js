import {expect} from "chai";
import {nbYear} from "../lib/2021-05-20-grow-the-popuation.js"
describe('2021-05-20-grow-the-popuation', () => {

    describe("User story 1", ()=>{
        it("Should return false if target smaller than current", ()=>{
            expect(nbYear(5,1,1,4)).to.equal(false);
        })
    })
});
