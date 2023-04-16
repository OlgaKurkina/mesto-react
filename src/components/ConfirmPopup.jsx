import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmPopup({
  selectedCard,
  isOpen,
  onClose,
  onDeleteCard,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard(selectedCard._id);
  }

  return (
    <PopupWithForm
      name="сonfirm"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}
