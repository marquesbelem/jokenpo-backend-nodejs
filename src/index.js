const readline = require('readline-sync');

var Jokenpo = require('../src/classes/Jokenpo');
var jokenpo = new Jokenpo();

var Start;
var Response;
var Exit;
var SelectPlayer;
var RoundPlayers;

var resPlayer1;
var resPlayer2;

Response = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    return readline.keyInSelect(options, 'Para jogar escolha algum dos numeros correspondentes');
};


RoundPlayers = () => {
    console.log("\nJogador 1");
    resPlayer1 = Response();

    if (resPlayer1 != -1) {
        console.log("\nJogador 2");
        resPlayer2 = Response();
    }
}

Exit = () => {
    const options = ['Iniciar/Continuar'];
    return readline.keyInSelect(options, '');
}


SelectPlayer = () => {
    const options = ['vs Bot', 'vs Amigo'];
    return readline.keyInSelect(options, '');
}

Start = () => {
    var roud = SelectPlayer();

    while (Exit() != -1) {
        if (roud == 0)
            jokenpo.Round(Response(), Math.round(0.3));
        if (roud == 1) {
            RoundPlayers();
            jokenpo.Round(resPlayer1, resPlayer2);
        }
    }
}

Start();