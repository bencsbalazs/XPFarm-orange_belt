const { expect } = require('chai');
const { quarterOfTheYear } = require('../lib/2021-06-14-quarterOfTheYear.js');

describe('Testing 2021-06-14-quarterOfTheYear', () => {
  describe('User story 1', ()=>{
    it('Should be false if the parameter is not integer', ()=>{
      expect(quarterOfTheYear("not number")).equal(false);
    });
  });

  describe('User story 2', ()=>{

  });
});
