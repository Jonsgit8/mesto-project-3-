/*показ ошибок инпутов*/
const showInputError = (input, errorTextElement, validationMessage, inputErrorClass, errorText) => {
  errorTextElement.textContent = validationMessage;
  errorTextElement.classList.add(errorText);
  input.classList.add(inputErrorClass);
};
/*скрытие ошибок инпутов*/
const hideInputError = (input, errorTextElement, inputErrorClass, errorText) => {
  errorTextElement.textContent = '';
  input.classList.remove(inputErrorClass);
  errorTextElement.classList.remove(errorText);
};

/*очистка инпутов*/
function clearInputErrors(popup) {
  const inputs = Array.from(popup.querySelectorAll(config.inputSelector))
  inputs.forEach((input) => {
    const errorTextElement = document.querySelector(`${config.errorClass}${input.id}`);
    hideInputError(input, errorTextElement, config.inputErrorClass, config.errorText)
  })
}

/*проверка инпутов на валидность*/
function checkInvalidInputs(inputList) {
  return inputList.some((input) => !input.validity.valid);
}

/*disabled для Button*/
function setDisabledButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true);
}
/*enabled для Button*/
function setEnabledButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled');
}

/*переключение состояния кнопки Cохранить*/
function toggleButtonState(inputList, button, inactiveButtonClass) {
    if(checkInvalidInputs(Array.from(inputList))) {
      setDisabledButton(button, inactiveButtonClass);
    } else {
      setEnabledButton(button, inactiveButtonClass);
    }
}

/*проверка валидности полей*/
const checkInputValidity = (input, errorClass, inputErrorClass, errorText) => {
  // const button = form.querySelector(submitButtonSelector)
  // .form__error_user-name-input
  const errorTextElement = document.querySelector(`${errorClass}${input.id}`);
  if(!input.validity.valid) {
     showInputError(input, errorTextElement, input.validationMessage, inputErrorClass, errorText)
    } else {
      hideInputError(input, errorTextElement, inputErrorClass, errorText);
    }
  };

/*прослушивание валидности полей*/
const setEventListeners = (form, config, errorClass, inputErrorClass, submitButtonSelector, inactiveButtonClass, errorText) => {
  const inputList = form.querySelectorAll(config.inputSelector);
  const button = form.querySelector(submitButtonSelector);
  toggleButtonState(inputList, button, inactiveButtonClass);

  inputList.forEach((input) => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, errorClass, inputErrorClass, errorText);
      toggleButtonState(inputList, button, inactiveButtonClass);
    });
  });
};
/*запуск валидации*/
const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((form) => {
    setEventListeners(form, config, config.errorClass, config.inputErrorClass, config.submitButtonSelector, config.inactiveButtonClass, config.errorText);
  });
};
/*настройки валидации*/
const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_error', // __ red
  errorClass: '.form__error_',
  errorText: 'form__error',
};

enableValidation(config);