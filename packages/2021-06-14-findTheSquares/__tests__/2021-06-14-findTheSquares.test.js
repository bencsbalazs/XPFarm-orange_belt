const { expect } = require('chai');
const { findTheSquares } = require('../lib/2021-06-14-findTheSquares.js');

describe('Testing 2021-06-14-findTheSquares', () => {
  describe('User story 1', ()=>{
    it('It should be false if input is not between 0-1000000', ()=>{
      expect(findTheSquares(1000002)).equal(false)
    });
    it('It should be false if input is not odd', ()=>{
      expect(findTheSquares(2)).equal(false);
    });
  });

  describe('User story 2', ()=>{
    it('Should return false if returning value is not a string', ()=>{
      expect(typeof(findTheSquares(9))).equal("string");
    });
    it('Should return 9-4', ()=>{
      expect(findTheSquares(5)).equal('9-4');
    });
  });
});
