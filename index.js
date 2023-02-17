const editProfileOpenButton = document.querySelector('#open-edit-popup');
const editProfileCloseButton = document.querySelector('#close-edit-popup')
const editPopup = document.querySelector('#edit-popup');

editProfileOpenButton.addEventListener('click', function () {
  editPopup.classList.remove('popup_opened');
});
 
editProfileCloseButton.addEventListener('click', function() {
  editPopup.classList.add('popup_opened')
}); 

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
