const isValidCPF = (CPF) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(CPF).toLowerCase())
}

const isValidPassword = (password) => {
    const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(String(password))
}
  
const form = document.querySelector('form')
const message = document.querySelector('.dashboard')
const inputCPF = document.querySelector('input[name="CPF"]')
const inputPassword = document.querySelector('input[name="Password"]')
  
let isValidForm = false
  
const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
}
  
const invalidateElem = (elem) => {
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
}
  
const validateInput = () => {
    isValidForm = true
    if (!inputCPF.value) {
      invalidateElem(inputCPF)
    }
  
    if (!isValidPassword(inputPassword.value)) {
      invalidateElem(inputPassword)
    }
}
  
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateInput()
  
    if (isValidForm) {
      form.remove()
      message.classList.remove('error-hidden')
      console.log('Validated')
      document.getElementById('log-cont').style.display = "none"
      document.querySelector('.img-acc').style.display = "none"
      document.querySelector('.dashboard').style.display = "block"
    }
})
  
inputCPF.addEventListener('input', () => {
    resetInput(inputCPF)
})
  
inputPassword.addEventListener('input', () => {
    resetInput(inputPassword)
})

