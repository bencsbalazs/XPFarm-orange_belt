import {expect} from 'chai';
import {triangles} from '../index.js'

describe("Triangles final color", () => {
    describe("input is valid", () => {
        it("when it is not null", () => {
          expect(triangles(null)).equal("");
        });
      });

      describe("edge cases", () => {
        it("for a single letter return it", () => {
          expect(triangles("R")).equal("R");
          expect(triangles("G")).equal("G");
        });
    
        
        it("for two different letters return third", () => {
          expect(triangles("RG")).equal("B");
          expect(triangles("GR")).equal("B");
        });
    
        
        it("for the same letter twice return it once", () => {
          expect(triangles("RR")).equal("R");
        });
      });
      
      describe("for three or more letters", () => {
        it("three different letters", () => {
          expect(triangles("RGB")).equal("G");
        });
      });
})