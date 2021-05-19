import {expect} from "chai";
import {largestPairSumInArray} from "../lib/2021-05-18-largest-pair-sum-in_array.js";

describe('2021-05-18-largest-pair-sum-in_array', () => {
    describe("User story 1", ()=>{
        it('User test 1', ()=>{
            expect(largestPairSumInArray("array")).equal(false);
        });

        it("return false if array contains not only numbers", ()=>{
            expect(largestPairSumInArray([1,2,"a"])).equal(false);
        });
    });
    
});
