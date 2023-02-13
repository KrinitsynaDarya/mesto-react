import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");

  // Обработчик изменения инпута обновляет стейт
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [description, setDescription] = React.useState("");

  // Обработчик изменения инпута обновляет стейт
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      onClose={onClose}
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-container">
        <input
          value={name || ""}
          onChange={handleNameChange}
          className="popup__field"
          id="profile-name"
          name="name"
          minLength="2"
          maxLength="40"
          noValidate
          required
          placeholder="Имя"
        />
        <span className="popup__field-error profile-name-error"></span>
        <input
          value={description || ""}
          onChange={handleDescriptionChange}
          className="popup__field"
          id="profile-job"
          name="about"
          minLength="2"
          maxLength="200"
          noValidate
          required
          placeholder="О себе"
        />
        <span className="popup__field-error profile-job-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
