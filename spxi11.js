const quantitySpxi11Input = document.getElementById('quantitySpxi11')

quantitySpxi11Input.addEventListener('input', calculateSpxi11)

function calculateSpxi11 () {
    const quantitySpxi11 = parseInt(quantitySpxi11Input.value)

    const priceSpxi11 = quantitySpxi11 * 51.44

    displaSpxi11(priceSpxi11)
}

function displaSpxi11(priceSpxi11) {
    document.getElementById('priceSpxi11').textContent = `$${priceSpxi11.toFixed(2)}`
    
}

calculateSpxi11 ()