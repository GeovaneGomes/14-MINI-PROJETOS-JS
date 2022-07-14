// Javascript - Faixa de preço

// Crie um array de objetos de faixa de preços para que ela possa ser usado em um site igual ao do mercado livre

//Primeira Opção

let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'até R$1000', minimo: 1000, maximo: 9999999}
];

// Segunda Opção (Factory Function)

function criafaixaPreco (tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criafaixaPreco('a', 1, 1000),
    criafaixaPreco('b', 100, 1000),
    criafaixaPreco('c', 1000, 10000),
];

//Terceira Opção (Construtor Function)

function FaixaPreco (tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixa3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixa3);