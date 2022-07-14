//EXERCÍCIO FIZZ BUZZ

//Divisível por 3 => fizz
//Divisível por 5 => buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => entrada//Não é um número => 'Não é um número'

const resultado = fizzBuzz(11);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}

console.log(resultado);