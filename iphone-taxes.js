const amountDockInput = document.getElementById('amountDock')

amountDockInput.addEventListener('input', calculateReturn)

function calculateReturn () {
    const amountDock = parseFloat(amountDockInput.value)

    const taxReturn = amountDock * 1.0845
    
    if (taxReturn >= 890) {
        document.getElementById('answerReturn').innerHTML = "No, you got the iPhone."
    }
    else {
        document.getElementById('answerReturn').innerHTML = "Yes, go on!"
    }

    displaReturn(taxReturn, answerReturn)
}

function displaReturn(taxReturn, answerReturn) {
    document.getElementById('taxReturn').textContent = `$${taxReturn.toFixed(2)}`
    document.getElementById('answerReturn').textContent = `$${answerReturn.toFixed(2)}`
}