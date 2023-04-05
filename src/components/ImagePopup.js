import React from 'react';
function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__image-container">
                <img className="popup__image" alt="Картинка в модальном окне" />
                <h2 className={`popup__${props.name}`}>{props.title}</h2>
                <button className="close-icon" onClick={onclose}></button>
            </div>
        </div>
    )
}

export default ImagePopup;