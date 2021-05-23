import {expect} from "chai";
import {nbYear} from "../lib/2021-05-20-grow-the-popuation.js"
describe('2021-05-20-grow-the-popuation', () => {

    describe("User story 1", ()=>{
        it("Should return false if target smaller than current", ()=>{
            expect(nbYear(5,1,1,4)).to.equal(false);
        })
        it("should be false when the percentage is not a number", ()=>{
            expect(nbYear(2,"3",1,5)).to.equal(false);
        })
    })

    describe("User story 2", ()=>{
        it("Should be false when incoming people is not number",()=>{
            expect(nbYear(1,2,"1",20)).to.equal(false)
        })

        it("Should return the correct number", ()=>{
            expect(nbYear(1000,2,50,1200)).to.equal(3);
        })
    })
});
