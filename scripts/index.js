const userNameElement = document.querySelector('.profile__name');/*1-ая строка Profile*/
const userOccupationElement = document.querySelector('.profile__occupation');/*2-ая строка Profile*/
const profileForm = document.querySelector('#profile-form')/*форма Profile*/
const placeForm = document.querySelector('#place-form')/*форма Place*/
const userNameInput = document.querySelector('.form__input_type_name');/*1-ая строка формы*/
const userOccupationInput = document.querySelector('.form__input_type_occupation');/*2-ая строка формы*/

const editProfileOpenButton = document.querySelector('.profile__correct');/*кнопка Profile*/
const addPlaceOpenButton = document.querySelector('.profile__add');/*кнопка Place */
const popupPlaceImg = document.querySelector('#popup-place-img')/*картинка Place*/

const profilePopUp = document.querySelector ('#popup-profile');/*попап Profile*/
const editPlacePopup = document.querySelector('#popup-place')/*попап Place*/
const previewImgPopup = document.querySelector('#popup-place-img')/*попап Img*/

const editProfileCloseButton = document.querySelector('#popup-profile-close');/*Крестик попап-profile*/
const editPlaceCloseButton = document.querySelector('#popup-place-close');/*крестик popup-place*/
const prewiewImgCloseButton = document.querySelector('#popup-img-close');/*крестик popup-img*/

const elementsBlock = document.querySelector('.elements__block')/*контейнер Places*/
const placeNameInput = placeForm.querySelector('#place-name-input')
const placeLinkInput = placeForm.querySelector('#place-link-input')
const newCard = document.querySelector('#templateCard')/*шаблон Place*/
const previewImg = document.querySelector('.popup__pic')/*Img Place*/
const previewText = document.querySelector('.popup__text')/*текст Place*/

const popupList = Array.from(document.querySelectorAll('.popup'))
const buttonSubmitPlace = document.querySelector('#popup-place-submit')/*кнопка Сохранить popup Place*/

/*Открытие Закрытие popup*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  disableEscListener()
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
  enableEscListener()
}
/*Закрытие на ESC*/
function onEscClose(e) {
 if (e.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}
function enableEscListener() {
  document.addEventListener('keyup', onEscClose)
}
function disableEscListener() {
  document.removeEventListener('keyup', onEscClose)
}
/*Открытие popup Place+*/
addPlaceOpenButton.addEventListener('click', function() {
  setDisabledButton(buttonSubmitPlace, config.inactiveButtonClass)/*disable на повторном открытии*/
  clearInputErrors(editPlacePopup)
  clearInputValues()
  openPopup(editPlacePopup)
})

/*очищение полей popup Place*/
function clearInputValues() {
  placeNameInput.value = '';
  placeLinkInput.value = '';
}

/*реализация функционала открытия попап Profile и заполнения полей формы*/
editProfileOpenButton.addEventListener('click', function() {
  openPopup(profilePopUp);/*move класс*/
  clearInputErrors(profilePopUp)
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

/*реализация функционала Сохранения формы Profile*/
function handleProfileForm (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value
  userOccupationElement.textContent =  userOccupationInput.value;
  closePopup(profilePopUp)
}
profileForm.addEventListener('submit', handleProfileForm)

/*реализация хранения 6 карточек*/
function createCard(card) {
  /*клонирование и наполнение*/
  const cloneCard = newCard.content.cloneNode(true)
  const cardName = cloneCard.querySelector('.elements__name')
  const cardImg = cloneCard.querySelector('.elements__img')
  cardImg.setAttribute('src', card.link)
  cardImg.setAttribute('alt', card.name)
  cardName.textContent = card.name
  /*клик на корзину*/
  const deletePlaceButton = cloneCard.querySelector('.elements__trash')
  deletePlaceButton.addEventListener('click', handleDeleteButtonClick)
  /*клик на лайк*/
  const likeButton = cloneCard.querySelector('.elements__like')
  likeButton.addEventListener('click', () => handleLikeClick(likeButton))
  /*клик на картинку*/
  cardImg.addEventListener('click', () => handlePreviewImgClick(card))
  return cloneCard
}
function addCard(cloneCard) {
  return elementsBlock.prepend(cloneCard)
}
cards.forEach((card)=>{
  const newCard = createCard(card) // Cоздаём новую карточку
  addCard(newCard) // Отрисовываем новую карточку в DOM
})
/*клик на лайк*/
function handleLikeClick(button) {
  button.classList.toggle('elements__like_active')
}
/*клик для preview картинки*/
function handlePreviewImgClick(card) {
  openPopup(previewImgPopup)
  previewImg.src = card.link
  previewImg.alt = card.name
  previewText.textContent = card.name
}
/*Удаление карточки Place*/
function handleDeleteButtonClick (event) {
  const button = event.target
  const card = button.closest('.elements__card')
  card.remove()
}
/*Сохранение popup-Place*/
function handleCreateCard(event) {
  event.preventDefault();

  const card = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  };

  createCard(card);
  placeForm.reset();
  const newCard = createCard(card) // Cоздаём новую карточку
  addCard(newCard) // Отрисовываем новую карточку в DOM
  closePopup(editPlacePopup);
}

placeForm.addEventListener('submit', handleCreateCard)

/*цикл проходит по popup-ам и по клику на Оверлей и Крестик закрыает их*/
popupList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    /*таргет-то,на что кликнули, кюрентТаргет то, что вызвало событие*/
    if (event.target === event.currentTarget || event.target.classList.contains('popup__cross')) {
      closePopup(event.currentTarget)
    }
 })
})

