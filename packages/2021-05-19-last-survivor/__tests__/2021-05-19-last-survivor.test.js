import {expect} from 'chai';
import {lastSurvivor} from "../lib/2021-05-19-last-survivor.js";

describe('2021-05-19-last-survivor', () => {
    describe('User story 1', ()=>{
        it('Should be false when input is not string', ()=>{
            expect(lastSurvivor(1,[1])).to.equal(false);
        });
        it('Should be false when coords input is not array', ()=>{
            expect(lastSurvivor("String",1)).to.equal(false);
        });
    });

    describe('User story 1', ()=>{
        it('Should be false when coords input is longer than str', ()=>{
            expect(lastSurvivor("String",[1,2,3]).length).greaterThan(1)
        });
        it('Should be false when returning letter is not correct', ()=>{
            expect(lastSurvivor("abc",[1,1])).to.equal("a");
        });
    });
});
