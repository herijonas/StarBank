const quantityEurp11Input = document.getElementById('quantityEurp11')

quantityEurp11Input.addEventListener('input', calculateEurp11)

function calculateEurp11 () {
    const quantityEurp11 = parseInt(quantityEurp11Input.value)

    const priceEurp11 = quantityEurp11 * 2.15

    displaEurp11(priceEurp11)
}

function displaEurp11(priceEurp11) {
    document.getElementById('priceEurp11').textContent = `$${priceEurp11.toFixed(2)}`
    
}

calculateEurp11 ()