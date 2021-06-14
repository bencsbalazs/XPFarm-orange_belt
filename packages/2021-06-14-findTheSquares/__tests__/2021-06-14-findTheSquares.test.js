const { expect } = require('chai');
const { findTheSquares } = require('../lib/2021-06-14-findTheSquares.js');

describe('Testing 2021-06-14-findTheSquares', () => {
  describe('User story 1', ()=>{
    it('It should be false if input is not between 0-1000000', ()=>{
      expect(findTheSquares(1000002)).equal(false)
    });
    it('It should be false if input is not odd', ()=>{
      expect(findTheSquares(1)).equal(false);
    });
  });

  describe('User story 2', ()=>{
    it.skip('', ()=>{

    });
    it.skip('', ()=>{

    });
  })
});
