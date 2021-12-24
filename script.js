let order = []
let clickedOrder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const azul = document.querySelector('.azul')

const vermelho = document.querySelector('.vermelho')

const verde = document.querySelector('.verde')

const amarelo = document.querySelector('.amarelo')

// Função para sortear os números entre 0 e 3.
let shuffleOrder = () => {
    // variavel para guardar o numero a cada rodada
    let colorOrder = Math.floor(Math.random() * 4)
    // Atribui o número gerado
    order[order.length] = colorOrder
    clickedOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

// Acende a cor
let lightColor = (element, number) => {
    number = number * 500
    // Acende a cor
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    // Apaga a cor
    setTimeout(() => {
        element.classList.remove('selected')
    })
}
