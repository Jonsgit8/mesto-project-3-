
const showInputError = (errorTextElement, validationMessage) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add('form__error')

}

const hideInputError = () => {
  
}


const checkIntutValidity = (input, errorClass) => {
  const errorTextElement = document.querySelector(`${errorClass}${input}`)
  console.log(checkIntutValidity)
  if(input.validity.valid) {
    showInputError(errorTextElement, input.ValidationMessage)
  } else {
    hideInputError(errorTextElement)
  }
  }


const setEventListeners = (form, inputList, errorClass) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkIntutValidity(input, errorClass)
    })
  });
}


const enableValidation = (config) => {
  const form = document.querySelector(config.formSelector)
  const inputList = form.querySelectorAll(config.inputSelector)

  setEventListeners(form, inputList, config.errorClass)
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  //submitButtonSelector: '.form__button',
  //inactiveButtonClass: '.form__button_disabled',
  inputErrorClass: '.form__error_',
  //errorClass: '.form__input_type_error'
});