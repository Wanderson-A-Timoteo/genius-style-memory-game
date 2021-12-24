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
    // Acende o botão
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    // Apaga o botão
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// Verifica se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            // Função perdeu
            lose()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível.`)
        // Função próximo nível
        nextLevel()
    }
}

// Funçao para clique do usuario
let click = color => {
    clickedOrder[clickedorder.length] = color
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
    })

    checkOrder()
}
