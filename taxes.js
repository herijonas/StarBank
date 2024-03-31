const quantiaInicialInput = document.getElementById('quantiaInicial')
const tempoDepositoInput = document.getElementById('tempoDeposito')

const tempoNumE1 = document.getElementById('tempo-num')

quantiaInicialInput.addEventListener('input', calculateSalary)
tempoDepositoInput.addEventListener('input', calculateSalary)

function calculateSalary () {
    const quantiaInicial = parseFloat(quantiaInicialInput.value)
    const tempoDeposito = parseFloat(tempoDepositoInput.value)

    const ganhoTotal = quantiaInicial * tempoDeposito * 1.01075
    const taxasGov = quantiaInicial * 0.06 * tempoDeposito

    tempoNumE1.innerText = tempoDepositoInput.value

    displaAmounts(ganhoTotal, taxasGov)
}

function displaAmounts(ganhoTotal, taxasGov) {
    document.getElementById('ganhoTotal').textContent = `$${ganhoTotal.toFixed(2)}`
    document.getElementById('taxasGov').textContent = `$${taxasGov.toFixed(2)}`
    
}

calculateSalary ()