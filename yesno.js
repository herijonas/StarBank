function getValue() {
    var e = document.getElementById("parameters")
    var selectedItem = e.options[e.selectedIndex].value

    document.getElementById('optionCred').innerHTML = (selectedItem)

    display ()
}

function display (optionCred) {
    document.getElementById('optionCred').textContent = `$${optionCred.toFixed(2)}`
}

/*----------------------------------*/

const quantidadeInput = document.getElementById('quantidade')

quantidadeInput.addEventListener('input', finalResult)

function finalResult() {
    const quantidade = parseFloat(quantidadeInput.value)

    var f = document.getElementById("selected")
    var selectedYes = f.options[f.selectedIndex].value

    if (selectedYes == "Yes") {
        document.getElementById('resultRebate').innerHTML = quantidade * 1.04
    } else {
        document.getElementById('resultRebate').innerHTML = quantidade * 1.02
    }

    show ()
}

function show (resultRebate) {
    document.getElementById('resultRebate').textContent = `$${resultRebate.toFixed(2)}`
}