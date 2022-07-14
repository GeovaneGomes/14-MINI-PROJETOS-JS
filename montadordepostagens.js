//Objetos de Postagem de Blog

// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguintes propriedades
//Postagem

/*
titulo
mensagem
autor
visualizações
comentarios 
    (autor, mensagem)
esta Ao vivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,

    comentarios : [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true

}

console.log(postagem);