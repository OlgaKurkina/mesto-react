import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api'


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditProfile() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlace() {
    setIsAddPlacePopupOpen(true);
  };

  function handleAvatarUpdate() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleConfirmPopup() {
    setisConfirmPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setisConfirmPopupOpen(false);
    setSelectedCard('');
  };

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfile}
        onAddPlace={handleAddPlace}
        onEditAvatar={handleAvatarUpdate}
        onConfirmDelete={handleConfirmPopup}
        onCardClick={handleCardClick} />
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_theme_light popup__input_type_element-name"
          type="text"
          name="element-name"
          id="element-name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="30" />
        <span
          className="popup__input-error element-name-error">
        </span>
        <input
          className="popup__input popup__input_theme_light popup__input_type_element-link"
          type="url"
          name="element-link"
          id="element-link"
          placeholder="О себе"
          required />
        <span
          className="popup__input-error element-link-error">
        </span>
      </PopupWithForm>
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_edit_avatar"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на аватар"
          required />
        <span className="popup__input-error avatar-error">
        </span>
      </PopupWithForm>
      <PopupWithForm
        name='place'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_theme_light popup__input_type_element-name"
          type="text"
          name="element-name"
          id="element-name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" />
        <span
          className="popup__input-error element-name-error">
        </span>
        <input
          className="popup__input popup__input_theme_light popup__input_type_element-link"
          type="url"
          name="element-link"
          id="element-link"
          placeholder="Ссылка на картинку"
          required />
        <span
          className="popup__input-error element-link-error">
        </span>
      </PopupWithForm>
      <PopupWithForm
        name='сonfirm'
        title='Вы уверены?'
        buttonText='Да'
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
