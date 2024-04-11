/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

/*
document.getElementById('botao');
        MÉTODO         ARGUMENTO (cada método pode receber um ou mais argumentos. Entre aspas pois é texto)
*/

//alert('oi'); //pop-up//


//OBJETIVO 1
//Passo 1

const botaoMonstrarProjetos = document.querySelector('.btn-mostrar-projetos'); //QUERYSELECTOR busca somente 1 elemento
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')//QUERYSELECTORALL busca todos os elementos da classe. Elementos da classse 'projeto', exceto os que tb tem a classe 'ativo'.

botaoMonstrarProjetos.addEventListener('click', () => { /*ARROW FUNCTION*/ //o que vai acontecer quando a pessoa clicar
    
    //Passo 3
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo'); //adiciona a classe 'ativo'
    });

    //OBJETIVO 2
    botaoMonstrarProjetos.classList.add("remover");
}); //ponto e virgula opicional

/*VERSÃO FATORADA:

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

*/