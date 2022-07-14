// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteristico(10);

function exibirAsteristico(linhas) {
    //let padrao = '';

    //for (let linha = 1; linha <= linhas; linha++) {
    //    padrao += '*';

    //    console.log(padrao);
    //}

    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';

        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }

        console.log(padrao);
    }
}

