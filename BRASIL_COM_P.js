function solucao(primeiraLetra, segundaLetra, palavras) {
    var qtd = palavras.length
    let pos = 0
    let selec = 0 
    while (pos < qtd) {
        let palavra = palavras[pos]
        if (primeiraLetra == palavra[0] && segundaLetra == palavra[1]) {
            console.log(palavra);
            selec = selec + 1;
        } pos = pos + 1;
    } if (selec == 0) {
        console.log("NENHUMA")
    } 
}
