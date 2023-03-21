/*показ ошибок инпутов*/
const showInputError = (input, errorTextElement, validationMessage, inputErrorClass) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add('form__error')
  input.classList.add(inputErrorClass)
}
/*скрытие ошибок инпутов*/
const hideInputError = (input, errorTextElement, inputErrorClass) => {
  errorTextElement.textContent = ''
  input.classList.remove(inputErrorClass)
}

/*проверка инпутов на валидность*/
function checkInvalidInputs(inputList) {
  return inputList.some((input) => !input.validity.valid)
}

/*disabled для Button*/
function setDisabledButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass)
  button.setAttribute('disabled', true)
}
/*enabled для Button*/
function setEnabledButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass)
  button.removeAttribute('disabled')
  button.disabled = false
}

/*переключение состояния кнопки Cохранить*/
function toggleButtonState(inputList, button, inactiveButtonClass) {
    if(checkInvalidInputs(Array.from(inputList))) {
      setDisabledButton(button, inactiveButtonClass)
      console.log('LBP')
    } else {
      setEnabledButton(button, inactiveButtonClass)
      console.log('FFF')
    }
}

/*проверка валидности полей*/
const checkInputValidity = (input, errorClass, inputErrorClass, form, submitButtonSelector) => {
  // const button = form.querySelector(submitButtonSelector)
  // .form__error_user-name-input
  const errorTextElement = document.querySelector(`${errorClass}${input.id}`)
  if(!input.validity.valid) {
     showInputError(input, errorTextElement, input.validationMessage, inputErrorClass)
    } else {
      hideInputError(input, errorTextElement, inputErrorClass)
    }
  }
/*прослушивание валидности полей*/
const setEventListeners = (form, config, errorClass, inputErrorClass, submitButtonSelector, inactiveButtonClass) => {
  const inputList = form.querySelectorAll(config.inputSelector)
  const button = form.querySelector(submitButtonSelector)
  toggleButtonState(inputList, button, inactiveButtonClass)

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, errorClass, inputErrorClass, form, submitButtonSelector)
      toggleButtonState(inputList, button, inactiveButtonClass)
    })
  });
}
/*запуск валидации*/
const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault(e)
    })
    setEventListeners(form, config, config.errorClass, config.inputErrorClass, config.submitButtonSelector, config.inactiveButtonClass)
  })
}

/*настройки валидации*/
const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_error', // __ red
  errorClass: '.form__error_'
}

enableValidation(config);