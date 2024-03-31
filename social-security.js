const quantiasInicialInput = document.getElementById('quantiasInicial')
const temposDepositoInput = document.getElementById('temposDeposito')

const temposNumE1 = document.getElementById('tempos-num')

quantiasInicialInput.addEventListener('input', calculateSecurity)
temposDepositoInput.addEventListener('input', calculateSecurity)

function calculateSecurity () {
    const quantiasInicial = parseFloat(quantiasInicialInput.value)
    const temposDeposito = parseFloat(temposDepositoInput.value)

    const ganhosTotal = quantiasInicial * temposDeposito * 1.14775 * 12
    const taxassGov = quantiasInicial * 0.8 * temposDeposito 

    temposNumE1.innerText = temposDepositoInput.value

    displaAmountss(ganhosTotal, taxassGov)
}

function displaAmountss(ganhosTotal, taxassGov) {
    document.getElementById('ganhosTotal').textContent = `$${ganhosTotal.toFixed(2)}`
    document.getElementById('taxassGov').textContent = `$${taxassGov.toFixed(2)}`
    
}

calculateSecurity ()