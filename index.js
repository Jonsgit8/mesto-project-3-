/*назначены 3-и id на "Карандаш" редактирования профиля, "Крест" закрытия popup и сам "popup" 
открытие/закрытие происходит за счёт селектора popup_opened */ 
const editProfileOpenButton = document.querySelector('#open-edit-popup');
const editProfileCloseButton = document.querySelector('#close-edit-popup')
const editPopup = document.querySelector('#edit-popup');

editProfileOpenButton.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});
 
editProfileCloseButton.addEventListener('click', function() {
  editPopup.classList.add('popup_opened')
}); 
/*
 */




/*назначены константы на поля профиля, они "привязаны" к полям формы редактирования
при изменении данных в форме, происходит редактирования профиля */ 
const userName = 'Жак-Ив Кусто';
const userOccupation = 'Исследователь океана';

const userNameElement = document.querySelector('#user-name');
userNameElement.textContent = userName;

const userOccupationElement = document.querySelector('#user-occupation');
userOccupationElement.textContent = userOccupation;

const userNameInput = document.querySelector('#user-name-input')
userNameInput.value = userName;

const userOccupationInput = document.querySelector('#user-occupation-input')
userOccupationInput.value = userOccupation;

userNameInput.addEventListener('input', function (event) {
  const value = event.target.value;
  userNameElement.textContent = value;
});

userOccupationInput.addEventListener('input', function (event) {
  const value = event.target.value;
  userOccupationElement.textContent = value;
});