import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';
import ImagePopup from './ImagePopup';
import Card from './Card';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
    setSelectedCard({});
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  React.useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        //console.log(`Ошибка: ${err}`);
      })
  }
  );
  return (
    <div className="page">
      <Header />
      
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <section className="elements">
        {
          cards.map((card) => { return (<Card key={card._id} card={card} onCardClick={handleCardClick} />) })
        }
      </section>
      <Footer />
      <PopupWithForm onClose={closeAllPopups} title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} >
        <fieldset className="popup__input-container">
          <input className="popup__field" id="profile-name" name="name" minLength="2" maxLength="40" noValidate
            required placeholder="Имя" />
          <span className="popup__field-error profile-name-error"></span>
          <input className="popup__field" id="profile-job" name="about" minLength="2" maxLength="200" noValidate
            required placeholder="О себе" />
          <span className="popup__field-error profile-job-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} >
        <fieldset className="popup__input-container">
          <input className="popup__field popup__field_type_avatar" id="avatar-link" name="avatar" type="url" required
            noValidate placeholder="Ссылка на картинку" />
          <span className="popup__field-error avatar-link-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm onClose={closeAllPopups} title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} >
        <fieldset className="popup__input-container">
          <input className="popup__field popup__field_type_place" id="card-name" name="name" minLength="1"
            maxLength="30" noValidate required placeholder="Название" />
          <span className="popup__field-error card-name-error"></span>
          <input className="popup__field popup__field_type_link" id="card-link" name="link" type="url" required
            noValidate placeholder="Ссылка на картинку" />
          <span className="popup__field-error card-link-error"></span>
        </fieldset>
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard}>

      </ImagePopup>
     

    </div>

  );
}

export default App;
