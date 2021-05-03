import {expect} from 'chai'
import {longWords} from '../index.js'

describe("Filter long words", ()=>{
    it("Check the sentence is a string",()=>{
        expect(longWords(2, 1)).to.be.false
    })
})