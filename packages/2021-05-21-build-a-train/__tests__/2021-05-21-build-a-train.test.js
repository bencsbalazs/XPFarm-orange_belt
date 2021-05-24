import {expect} from 'chai';
import {buildATrain} from '../lib/2021-05-21-build-a-train.js'
describe('2021-05-21-build-a-train', () => {
    describe('User story 1', ()=>{
        it('Should return false if String starts with correct letter', ()=>{
            expect(buildATrain('J___')).to.equal(false);
        })
    })
});
