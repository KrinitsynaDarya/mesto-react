/*селекторы*/
export const cardListSection = '.elements';
export const config =
{
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_active'
};
/* 5 кнопки переименованы */
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonEditAvatar = document.querySelector('.profile__avatar-button');
/*формы*/
/*const formEditProfile = document.querySelector('#popup-profile-edit');
const formAddCard = document.querySelector('#popup-card-new');*/
/* 9* обращаемся через модификаторы */
export const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
export const formAddCard = document.querySelector('.popup__form_type_add-card');
export const formEditAvatar = document.querySelector('.popup__form_type_edit-avatar');