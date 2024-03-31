const quantityIvvb11Input = document.getElementById('quantityIvvb11')

quantityIvvb11Input.addEventListener('input', calculateIvvb11)

function calculateIvvb11 () {
    const quantityIvvb11 = parseInt(quantityIvvb11Input.value)

    const priceIvvb11 = quantityIvvb11 * 54.32

    displaIvvb11(priceIvvb11)
}

function displaIvvb11(priceIvvb11) {
    document.getElementById('priceIvvb11').textContent = `$${priceIvvb11.toFixed(2)}`
    
}

calculateIvvb11 ()