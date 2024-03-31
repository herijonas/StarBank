const quantityBova11Input = document.getElementById('quantityBova11')

quantityBova11Input.addEventListener('input', calculateBova11)

function calculateBova11 () {
    const quantityBova11 = parseInt(quantityBova11Input.value)

    const priceBova11 = quantityBova11 * 23.76

    displaBova11(priceBova11)
}

function displaBova11(priceBova11) {
    document.getElementById('priceBova11').textContent = `$${priceBova11.toFixed(2)}`
    
}

calculateBova11 ()