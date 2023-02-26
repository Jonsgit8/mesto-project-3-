const userNameElement = document.querySelector('.profile__name');/*1-ая строка профиля*/
const userOccupationElement = document.querySelector('.profile__occupation');/*2-ая строка профиля*/

const editPopUp = document.querySelector ('.popup');/*попап*/
const editProfileOpenButton = document.querySelector('.profile__correct');/*карандаш профиля*/   /* */

const userNameInput = document.querySelector('.form__input_type_name');/*1-ая строка формы*/
const userOccupationInput = document.querySelector('.form__input_type_occupation');/*2-ая строка формы*/

/*реализация функционала открытия попап и заполнения полей формы*/
editProfileOpenButton.addEventListener('click', function(event) {
  editPopUp.classList.add('popup_opened');/*move класс*/
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

/*реализация функционала при нажатии на Крестик попап*/
const editProfileCloseButton = document.querySelector('.popup__close');/*Крестик попап*/
function closePopUp() {
  editPopUp.classList.remove('popup_opened');/*move класс*/
}
editProfileCloseButton.addEventListener('click', function(event) {
  closePopUp()/*move класс*/
});

/*реализация функционала Сохранения формы*/
let formElementInput = document.querySelector('.form')/*форма*/

formElementInput.addEventListener('submit', function (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value
  userOccupationElement.textContent =  userOccupationInput.value;
  closePopUp()
})
