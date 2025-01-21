let listaDeAmigos = [];
let numerosUsados = [];

/**
Função para: Adiciona um amigo à lista de amigos.
**/
function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo'); // Grava na variável o nome digitado
    let listaAmigos = document.getElementById('listaAmigos'); // Conecta a variável listaAmigos à lista no HTML
    let nome = nomeDigitado.value.trim(); // Elimina qualquer espaço que possa ter no nome digitado
    let tamanhoNome = nome.length; // Verifica quantas letras possui o nome digitado

    if (tamanhoNome < 4) { // Verifica se o nome é válido, tendo que ter no mínimo 4 letras
        alert('Digite um nome válido!');
        limparCampo(nomeDigitado);
    } else if (listaDeAmigos.includes(nome)) { // Verifica se o nome já existe na lista
        alert('Este nome já foi digitado!');
        limparCampo(nomeDigitado); // Limpa o campo nome
    } else {
        listaDeAmigos.push(nome); // Adiciona nome à lista de amigos
        let itemLi = document.createElement('li'); // Cria um item na lista
        itemLi.textContent = nome; // Adiciona o nome digitado à lista
        listaAmigos.appendChild(itemLi); // Adiciona o nome à lista de amigos no HTML
    }

    limparCampo(nomeDigitado);
}

/**
Função para: Sortear um amigo da lista de amigos.
**/
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Por favor digite ao menos 2 nomes para fazer o sorteio!');
    } else {
        let sorteio = document.getElementById('resultado');
        sorteio.innerHTML = ''; // Limpar resultados anteriores
        let quantidadeAmigos = listaDeAmigos.length;
        let listaAmigos = document.getElementById('listaAmigos');

        // Verifica se todos os nomes já foram sorteados e reinicia o Amigo Secreto
        if (numerosUsados.length >= quantidadeAmigos) {
            alert('Todos os amigos já foram sorteados! Vamos recomeçar!');
            reinicia();
            return;
        }

        let numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);

        // Gera um novo número sorteado até encontrar um que ainda não foi usado
        while (numerosUsados.includes(numeroSorteado)) {
            numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);
        }

        // Verifica se o número sorteado já foi usado
        if (!numerosUsados.includes(numeroSorteado)) {
            numerosUsados.push(numeroSorteado);
            let resultado = document.createElement('li');
            resultado.textContent = listaDeAmigos[numeroSorteado];
            sorteio.appendChild(resultado);
        }
    }
}

/**
Função para: Limpar o campo nome para próxima entrada.
**/
function limparCampo(campo) {
    campo.value = '';
}

/**
Função para: Reiniciar o sorteio, limpando todas as listas.
**/
function reinicia() {
    listaDeAmigos = [];
    numerosUsados = [];
    document.getElementById('listaAmigos').innerHTML = ''; // Limpar a lista no HTML
    document.getElementById('resultado').innerHTML = ''; // Limpar resultados anteriores
}