import { expect } from "chai";
import { Imeverywhere } from "../lib/2021-06-08-imEverywhere.js";

describe('2021-06-08-imEverywhere', () => {

    describe("As a user I need to know if it is the correct word", ()=>{
        it("The input should be a string.", ()=>{
            expect(Imeverywhere(1)).to.equal("Invalid word");
        });

        it("The number of vowels should be smaller than others.", ()=>{
            expect(Imeverywhere("Peace")).to.equal("Invalid word");
        });
    });

    describe("An 'i' should be placed at the beginning of the word.", ()=>{
        it("The word should start with Uppercase letter. ", ()=>{
            expect(Imeverywhere("lower")).to.equal("Invalid word");
        });

        it("The word should start with a consonant.", ()=>{
            expect(Imeverywhere("iPhone")).to.equal("Invalid word");
        });
    });
});
