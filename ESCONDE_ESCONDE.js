function solucao(numero) {
	var ajuda = 21
    if (numero > 20) {
        while (ajuda <= numero) {
            console.log(ajuda)
            ajuda = ajuda + 1;
        }
    } else {
        console.log("VOCE CONSEGUE, MANINHO")
    }
    
}