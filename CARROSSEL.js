function solucao(sequencia) {
	let qtd = sequencia.length
    let pos = 0
    let pic = 0
    while (pos < qtd) {
        if (sequencia[pos] === ">") {
            pic = pic + 1;
            if (pic == 7) {
                pic = 0
            }
        } else if (sequencia[pos] === "<") {
            pic = pic - 1;
            if (pic == -1) {
                pic = 6
            }
        } pos = pos + 1;
    } console.log(pic)
} 