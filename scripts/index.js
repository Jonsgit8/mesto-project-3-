const userNameElement = document.querySelector('.profile__name');/*1-ая строка профиля*/
const userOccupationElement = document.querySelector('.profile__occupation');/*2-ая строка профиля*/
const editPopUp = document.querySelector ('.popup');/*попап*/
const editProfileOpenButton = document.querySelector('.profile__correct');/*карандаш профиля*/   /* */

const userNameInput = document.querySelector('.form_name');/*1-ая строка формы*/
const userOccupationInput = document.querySelector('.form_occupation');/*2-ая строка формы*/

function closePopUp(popup) {
  popup.classList.add('popup_opened');
}

editProfileOpenButton.addEventListener('click', function(event) {
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
  editPopUp.classList.add('popup_opened');/*move класс*/
});

const editProfileCloseButton = document.querySelector('.popup__close');/*крестик попап*/
editProfileCloseButton.addEventListener('click', function(event) {
  //editPopUp.classList.add('popup_opened');/*move класс*/
  closePopUp();
});

let formElementInput = document.querySelector('.form')/*форма*/
formElementInput.addEventListener('submit', function (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopUp();
})

// function openPopUp(popup) {
//   popup.classList.remove('popup_opened');
//   popup.classList.add('popup_opened');
// }









// function handleFormSubmit(evt) {
//   evt.preventDefault()
//   let userNameInput = document.querySelector('.form_name').value;
//   let userOccupationInput = document.querySelector('.form_occupation').value;
//   userNameElement.textContent = userNameInput.value;
//   userOccupationElement.textContent = userOccupationInput.value;
//   closePopUp()
// }

/*
Саша:


openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('pop-up_state_active');
    console.log(popUp.className);
});
function popupClose() {
  popUp.classList.remove("pop-up_state_active");
}
closePopup.addEventListener("click", function (event) {
  popupClose();
});

let formElement = document.querySelector(".pop-up__container");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  popupClose();
}); 
const userNameElement = document.querySelector('.profile__title');
const userOccupationElement = document.querySelector('.profile__subtitle');
const userNameInput = document.querySelector('.pop-up__item-first');
const userOccupationInput = document.querySelector('.pop-up__item-second');
const popUp = document.querySelector('.pop-up');
const openPopUp = document.querySelector('.profile__link');
let closePopup = document.querySelector(".pop-up__close");


*/ 

/*
Женя:

const userName = 'Жак-Ив Кусто';
const userOccupation = 'Исследователь океана';

const userNameElement = document.querySelector('#user-name');
const userOccupationElement = document.querySelector('#user-occupation');
const userNameInput = document.querySelector('#user-name-input')
const userOccupationInput = document.querySelector('#user-occupation-input')

userNameElement.textContent = userName;
userOccupationElement.textContent = userOccupation;

userNameInput.value = userName;
userOccupationInput.value = userOccupation;

userNameInput.addEventListener('input', function (event) {
  const value = event.target.value;
  userNameElement.textContent = value;
});

userOccupationInput.addEventListener('input', function (event) {
  const value = event.target.value;
  userOccupationElement.textContent = value;
});
*/ 

/*
Инерация 2
function openPopUp(popup) {
  popup.classList.remove('popup_opened')
  console.log(popup.className);
  userNameInput.textContent = userNameElement.value 
}
function closePopUp(popup) {
  popup.classList.add('popup_opened')
  console.log(popup.className);
}
*/