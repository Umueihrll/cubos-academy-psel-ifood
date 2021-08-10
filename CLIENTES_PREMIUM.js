function solucao(precos) {
    var qtd = precos.length
    let posicao = 0
    let total = 0
    let itemP = 0
    while (posicao < qtd) { 
        let item = precos[posicao]
        if (item > 200) {
            itemP = itemP + 1
        }
        total = total + item
        posicao = posicao + 1
    } if (total > 1000) {
        if (itemP > 0) {
            console.log("PREMIUM")
        } else {
            console.log("VIP")
        }
    } else {
        console.log("NORMAL")
    }
}