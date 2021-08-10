function solucao(obras) {
	let qtd = obras.length
    let pos = 0
    let obra1 = obras.shift()
    let obra2 = obras.shift()
    let maior
    while (qtd > pos) {
        if (obra1.valor > obra2.valor) {
            maior = obra1;
            obras.push(obra2)
            obra2 = obras.shift()
        } else {
            maior = obra2;
            obras.push(obra1)
            obra1 = obras.shift()
        } pos = pos + 1; 
        

    } console.log(maior.nome)
}
