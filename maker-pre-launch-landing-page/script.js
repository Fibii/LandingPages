const formErrorMessage = document.getElementsByClassName('form__error')[0];
const emailInput = document.getElementsByClassName('footer__form__input')[0];

const isEmail = (value)=> {
    console.log(value)
    return value.includes('@');
}

emailInput.addEventListener('input', () => {
    console.log(isEmail(emailInput.value.toString()))
    if (!isEmail(emailInput.value)) {
       formErrorMessage.style.display = 'inline-block'
    } else {
        formErrorMessage.style.display = 'none'
    }
});