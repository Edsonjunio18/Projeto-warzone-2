//Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botóes de seleção de plataforma.

// Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
const botao = document.querySelector(".btn-plataforma");

//Passo 2 - Adicionar a classe ativo no botão para que o conteúdo dele apareça.
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - Pegar o clique do usuário do JS.
botao.addEventListener("click", () => {

//Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão de fechar, o conteúdo deve ser escondido.
const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

// Passo 1 - Verificar se o botão está aberto, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente.
if(botaoEstaAberto){
    elementoPlataformas.classList.remove("ativo")
}else{
//Passo 1.4 - Quando o usuário clicar, adicionar a classe ativo no botão para que o conteúdo dele apareça.
    elementoPlataformas.classList.add("ativo")
}
});