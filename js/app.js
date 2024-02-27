function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt (document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarpista(quantidade); 
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarpista(quantidade) {
    let ingressosPista = parseInt (document.getElementById('qtd-pista').textContent);
    if (quantidade > ingressosPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        ingressosPista = ingressosPista - quantidade;
        document.getElementById('qtd-pista').textContent = ingressosPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let ingressosSuperior = parseInt (document.getElementById('qtd-superior').textContent);
    if (quantidade > ingressosSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        ingressosSuperior = ingressosSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = ingressosSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let ingressosInferior = parseInt (document.getElementById('qtd-inferior').textContent);
    if (quantidade > ingressosInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        ingressosInferior = ingressosInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = ingressosInferior;
        alert('Compra realizada com sucesso!');
    }
}