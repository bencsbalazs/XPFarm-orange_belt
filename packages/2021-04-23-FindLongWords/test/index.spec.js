import {expect} from 'chai'
import {longWords} from '../index.js'

describe("Filter long words", ()=>{
    
    describe("Check input parameters", ()=>{
        it("Check the sentence is a string",()=>{
            expect(longWords(2, 1)).to.be.false
        })
    
        it("Check the input number is not 0",()=>{
            expect(longWords("This is a long sentence.", 0)).to.be.false
        })
    })

    describe("Check the output", ()=>{
        it("Should return with an array", ()=>{
            expect(longWords("This is a long sentence",1)).to.be.an("array")
        })

        it("Should return with the 'sentence' word", ()=>{
            expect(longWords("This is a long sentence",5)).to.equal(["sentence"])
        })
    })
    
})