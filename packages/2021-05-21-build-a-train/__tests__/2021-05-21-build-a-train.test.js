import {expect} from 'chai';
import {buildATrain} from '../lib/2021-05-21-build-a-train.js'
describe('2021-05-21-build-a-train', () => {
    describe('User story 1', ()=>{
        it('Should return false if String starts with correct letter', ()=>{
            expect(buildATrain('J___')).to.equal(false);
        })
        it('Should return false if train does not have coach', ()=>{
            expect(buildATrain('A')).to.equal(false);
        })
    })

    describe("User story 2", ()=>{
        it("Should be false if return is not a number", ()=>{
            expect(typeof(buildATrain("A_"))).is.equal("number");
        })
        it("Should be false if return is lower than 7", ()=>{
            expect(typeof(buildATrain("A_"))).is.equal("number");
        })
    })
});
