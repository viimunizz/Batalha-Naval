// Batalha Naval - Criar e "Desenhar" o mapa

var clc = require("cli-color");
var prompt = require("prompt-sync")();

const mapaJogador: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
]

const mapaAdversario: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function printarCor(linha: string): void {
    linha = linha.replaceAll('0', clc.bgBlue('  '));
    linha = linha.replaceAll('1', clc.bgBlack('  '));
    linha = linha.replaceAll('2', clc.bgRed('  '));
    console.log(linha);
}

function verificarNavio(mapa: number[][]): boolean {
    for (var linha of mapa) {
        if (linha.includes(1)) {
            return true
        }
    }
    return false
}

function vezAdversario(mapa: number[][]): number[][] {
    var x = Number(prompt('Digite uma coordenada X: '))
    var y = Number(prompt('Digite uma coordenada Y: '))
    if (mapa[x][y] == 1) {
        console.log('Você acertou o navio!')
    } else {
        console.log('Você não acertou o navio!')
    }
    mapa[x][y] = 2;
    for (var linha of mapa) {
        printarCor(linha.join(''));
    }
    return mapa; // <==== Biston  vai se foder 
}

function mostrarMapas(mapa: number[][]): void {
    while (verificarNavio(mapa)) {
        mapa = vezAdversario(mapa); // <==== Biston  vai se foder 
    }
    console.log("Você venceu XD")
}
mostrarMapas(mapaJogador);