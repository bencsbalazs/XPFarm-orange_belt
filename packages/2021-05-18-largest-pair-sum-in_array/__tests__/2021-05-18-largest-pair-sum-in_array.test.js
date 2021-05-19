import {expect} from "chai";
import {largestPairSumInArray, sorting} from "../lib/2021-05-18-largest-pair-sum-in_array.js";

describe('2021-05-18-largest-pair-sum-in_array', () => {
    describe("User story 1", ()=>{
        it('User test 1', ()=>{
            expect(largestPairSumInArray("array")).equal(false);
        });

        it("return false if array contains not only numbers", ()=>{
            expect(largestPairSumInArray([1,2,"a"])).to.eql(false);
        });
    });

    describe("User story 2", ()=>{
        it("returns with a sorted array", ()=>{
            expect(sorting([1,3,2])).to.eql([3,2,1]);
        });

        it("turns with the correct sum", ()=>{
            expect(largestPairSumInArray([10,14,2,23,19])).to.equal(42);
        });
    });
    
});
