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
            gameOver()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`)
        // Função próximo nível
        nextLevel()
    }
}

// Funçao para clique do usuario
let click = color => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')

        checkOrder()
    }, 250)
}

// Função que retorna a cor
let createColorElement = color => {
    if (color == 0) {
        return verde
    } else if (color == 1) {
        return vermelho
    } else if (color == 2) {
        return amarelo
    } else if (color == 3) {
        return azul
    }
}

// Função para o próximo nível do jogo
let nextLevel = () => {
    score++
    shuffleOrder()
}

// Função para Game Over
let gameOver = () => {
    alert(
        `Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`
    )
    order = []
    clickedOrder = []

    playGame()
}

// Função para iniciar novo jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
    score = 0

    nextLevel()
}

// Eventos de clique para as cores
verde.onclick = () => click(0)
vermelho.onclick = () => click(1)
amarelo.onclick = () => click(2)
azul.onclick = () => click(3)

// Inicio do jogo
playGame()
