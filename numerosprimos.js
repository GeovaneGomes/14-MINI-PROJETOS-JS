// Criar função para mostrar os números primos
// Número Primo é quando ele é divisivel por 1 ou ele mesmo

// Primos
//Compostos

//ex: 10, 11

exibirNumerosPrimos (15);

function exibirNumerosPrimos (limites) {
    for (let numero = 2; numero <= limites; numero++) {      
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo (numero) {    
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
            
        }
    }

    return true;
}