import { expect } from 'chai';
import { sumppg, NBAplayer } from '../lib/2021-06-03-sumgpp.js';

describe('2021-06-03-sumgpp', () => {
    describe("User story 1", ()=>{
        it('Should be object', ()=>{
            const player1 = new NBAplayer("Jordan", "bulls", 3);
            expect(typeof(player1)).to.equal("object");
        });
    
        it("Should return false if player doesn't have name", ()=>{
            const player1 = new NBAplayer("Jordan", "bulls", 3);
            expect(player1.hasOwnProperty("name")).equal(true);
        });
    });

    describe("User story 2", ()=>{
        it("Player should have a pgp attribute", ()=>{
            const player1 = new NBAplayer("Jordan", "bulls", 3);
            expect(player1.hasOwnProperty("ppg")).equal(true);
        });

        it("Should return the correct ppg", ()=>{
            const player1 = new NBAplayer("Jordan", "bulls", 3);
            const player2 = new NBAplayer("Michael", "bulls", 3);
            expect(sumppg(player1, player2)).equal(6);
        })
    });
    
});
