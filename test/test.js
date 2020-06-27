var assert = require('assert');
var Jokenpo = require('../src/classes/Jokenpo');

var jokenpo = new Jokenpo();

describe('CheckRound()', () => {
    it('Resultado: Empate', () => {
        assert.equal(jokenpo.CheckRound(0,0), 'Empatou');
    });
    it('Resultado: Ganhou', () => {
        assert.equal(jokenpo.CheckRound(0,2), 'Ganhou');
    });
    it('Resultado: Perdeu', () => {
        assert.equal(jokenpo.CheckRound(0,1), 'Perdeu');
    });

    it('Resultado: Empate', () => {
        assert.equal(jokenpo.CheckRound(1,1), 'Empatou');
    });
    it('Resultado: Ganhou', () => {
        assert.equal(jokenpo.CheckRound(1,0), 'Ganhou');
    });
    it('Resultado: Perdeu', () => {
        assert.equal(jokenpo.CheckRound(1,2), 'Perdeu');
    });

    it('Resultado: Empate', () => {
        assert.equal(jokenpo.CheckRound(2,2), 'Empatou');
    });
    it('Resultado: Ganhou', () => {
        assert.equal(jokenpo.CheckRound(2,1), 'Ganhou');
    });
    it('Resultado: Perdeu', () => {
        assert.equal(jokenpo.CheckRound(2,0), 'Perdeu');
    });
});