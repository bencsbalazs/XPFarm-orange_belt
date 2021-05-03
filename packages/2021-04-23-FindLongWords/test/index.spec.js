import {expect} from 'chai'
import {longWords} from '../index.js'

describe("Filter long words", ()=>{
    it("Check the sentence",()=>{
        expect(longWords("This is a long sentence.", 1)).to.be.an('array')
    })
})