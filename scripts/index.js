const userNameElement = document.querySelector('.profile__name');/*1-ая строка Profile*/
const userOccupationElement = document.querySelector('.profile__occupation');/*2-ая строка Profile*/
let formElementInput = document.querySelector('.form')/*форма*/
const userNameInput = document.querySelector('.form__input_type_name');/*1-ая строка формы*/
const userOccupationInput = document.querySelector('.form__input_type_occupation');/*2-ая строка формы*/

const editProfileOpenButton = document.querySelector('.profile__correct');/*кнопка Profile*/
const addPlaceOpenButton = document.querySelector('.profile__add');/*кнопка Place */
const popupPlaceImg = document.querySelector('#popup-place-img')/*картинка Place*/

const profilePopUp = document.querySelector ('#profile-popup');/*попап Profile*/
const editPlacePopup = document.querySelector('#popup-place')/*попап Place*/
const previewImgPopup = document.querySelector('#popup-place-img')/*попап Img*/

const editProfileCloseButton = document.querySelector('.popup__close');/*Крестик попап-profile*/
const editPlaceCloseButton = document.querySelector('#popup-place-close');/*крестик popup-place*/
const prewiewImgCloseButton = document.querySelector('#popup-img-close');/*крестик popup-img*/

/*Открытие Закрытие popup*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
/*Открытие popup Place+*/
addPlaceOpenButton.addEventListener('click', function(event) {
  openPopup(editPlacePopup)
})
/*Закрытие по крестику попап Профиля*/
editProfileCloseButton.addEventListener('click', () => closePopup(profilePopUp));
/*Закрытие по крестику popup Place+*/
editPlaceCloseButton.addEventListener('click', function(event) {
  closePopup(editPlacePopup)
});
/*Закрытие по крестику попап Img*/
prewiewImgCloseButton.addEventListener('click', () => closePopup(previewImgPopup));


/*реализация функционала открытия попап и заполнения полей формы*/
editProfileOpenButton.addEventListener('click', function(event) {
  profilePopUp.classList.add('popup_opened');/*move класс*/
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

/*реализация функционала Сохранения формы*/
formElementInput.addEventListener('submit', function (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value
  userOccupationElement.textContent =  userOccupationInput.value;
  closePopup(profilePopUp)
})

const cards = [
  { name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',},
  { name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',},
  { name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',},
  { name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',},
  { name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',},
  { name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',}]; 
/*реализация хранения 6 карточек*/
const elementsBlock = document.querySelector('.elements__block')

function createCard(card) {
  /*клонирование и наполнение*/
  const newCard = document.querySelector('#templateCard').content.cloneNode(true)
  const cardName = newCard.querySelector('.elements__name')
  const cardImg = newCard.querySelector('.elements__img')
  cardImg.setAttribute('src', card.link)
  cardImg.setAttribute('alt', card.alt)
  cardName.textContent = card.name
  /*клик на корзину*/
  const deletePlaceButton = newCard.querySelector('.elements__trash')
  deletePlaceButton.addEventListener('click', handleDeleteButtonClick)
  /*клик на лайк*/
  const likeButton = newCard.querySelector('.elements__like')
  likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('elements__like_active')
  })
  elementsBlock.prepend(newCard)
  /*клик на картинку*/
  cardImg.addEventListener('click', () => handlePreviewImgClick(card))
}
cards.forEach((card)=>{
  createCard(card)
})
/*клик для preview картинки*/
function handlePreviewImgClick(card) {
  popupPlaceImg.classList.add('popup_opened')
  const previewImg = document.querySelector('.popup__pic')
  previewImg.src = card.link
  previewImg.alt = card.name
  const previewText = document.querySelector('.popup__text')
  previewText.textContent = card.name
}


/*Удаление карточки Place*/
function handleDeleteButtonClick (event) {
  const button = event.target
  const card = button.closest('.elements__card')
  card.remove()
}
/*Сохранение popup-Place*/
let placeElementInput = document.querySelector('#place-form-input')/*форма Place*/
placeElementInput.addEventListener('submit', function (event) {
  event.preventDefault();
  let placeNameInput = placeElementInput.querySelector('#place-name-input').value
  let link = placeElementInput.querySelector('#place-link-input').value
  let card = {name: placeNameInput, 
              link,
              alt: "text"};
    createCard(card);
  closePopup(editPlacePopup)
})