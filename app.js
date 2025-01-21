let listaDeAmigos = [];
let numerosUsados = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo'); // grava na variavel o nome digitado
    let listaAmigos = document.getElementById('listaAmigos'); // conecta a variavel listaAmigos a Lista no HTML
    let nome = nomeDigitado.value.trim();  // elimita qualquer espaço que possa ter no nome digitado
    let tamanhoNome = nome.length; // verifica quantas letras possue o nome digitado

    if (tamanhoNome < 4) { // verifica se o nome é valido, tendo que ter no minimo 4 letras
        alert('Digite um nome válido!');
        limparCampo(nomeDigitado);
    } else if (listaDeAmigos.includes(nome) == true) { // verifica se o nome ja existe na lista
        alert('Este nome já foi digitado!');
        limparCampo(nomeDigitado);
    } else {
        listaDeAmigos.push(nome); // adiciona nome a lista de amigos
        let itemLi = document.createElement('li');
        itemLi.textContent = nome;
        listaAmigos.appendChild(itemLi);
    }

    limparCampo(nomeDigitado);
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Por favor digite ao menos 2 nomes para fazer o sorteio!');
    } else {
        let sorteio = document.getElementById('resultado'); 
        sorteio.innerHTML = ''; // limpar resultados anteriores
        let quantidadeAmigos = listaDeAmigos.length;
        let listaAmigos = document.getElementById('listaAmigos'); 
        
        if (numerosUsados.length >= quantidadeAmigos) { // verifica se todos nomes ja foram sorteados e reinicia o Amigo Secreto
            alert('Todos os amigos já foram sorteados! Vamos recomeçar!');
            reinicia();
            return;
        }
        
        let numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);
        
        while (numerosUsados.includes(numeroSorteado)) {
            numeroSorteado = Math.floor(Math.random() * quantidadeAmigos);
        }

        if (numerosUsados.includes(numeroSorteado) == false) { // verifica se o numero sorteado ja foi usado
            numerosUsados.push(numeroSorteado);
            let resultado = document.createElement('li');
            resultado.textContent = listaDeAmigos[numeroSorteado];
            sorteio.appendChild(resultado);
        }
    }
}

function limparCampo(campo) { // limpa o campo nome para proxima entrada
    campo.value = '';
}

function reinicia() {
    listaDeAmigos = [];
    numerosUsados = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
