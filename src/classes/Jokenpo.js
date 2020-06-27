/**
 * 0 = Pedra
 * 1 = Tesoura
 * 2 = Papel
 */

module.exports = class Jokepon {
    constructor() {
        this.options = {
            PEDRA: 0,
            PAPEL: 1,
            TESOURA: 2
        }
    }

    CheckRound(response, botRound) {
        switch (response) {
            case 0:
                if (botRound == this.options.PEDRA)
                    return 'Empatou';
                else if (botRound == this.options.PAPEL)
                    return 'Perdeu';
                else
                    return 'Ganhou';
                break;
            case 1:
                if (botRound == this.options.PEDRA)
                    return 'Ganhou';
                else if (botRound == this.options.PAPEL)
                    return 'Empatou';
                else
                    return 'Perdeu';
                break;
            case 2:
                if (botRound == this.options.PEDRA)
                    return 'Perdeu';
                else if (botRound == this.options.PAPEL)
                    return 'Ganhou';
                else
                    return 'Empatou';
                break;
        }

        return '';
    }

    Round(player1, player2) {
        var resultBot;
        var myResult = this.CheckRound(player1, player2);

        if (player2 == this.options.PEDRA)
            resultBot = " contra Pedra \n";
        else if (player2 == this.options.PAPEL)
            resultBot = " contra Papel \n";
        else
            resultBot = " contra Tesoura \n";

        if (player1 != -1)
            console.log("\nVocê " + myResult + resultBot);
        else
            console.log("Você não escolheu!");
    }
}