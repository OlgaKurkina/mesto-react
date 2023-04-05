import React from 'react';
function PopupWithForm(props) {

	return (
		<div
			className={`popup popup_type_${props.name} 
		${props.isOpen ? 'popup_opened' : ''}`}>
			<div
				className="popup__container">
				<h2
					className={`popup__container-name popup__${props.name}`}>
					{props.title}
				</h2>
				<form
					className="popup__form"
					name={`${props.name}-form`}
					method="post" >
					{props.children}
					<button
						className="popup__button"
						type="submit"
						name="submit"
						id="submit">
						{props.buttonText}
					</button>
				</form>
				<button
					className="close-icon"
					onClick={props.onClose}>
				</button>
			</div>
		</div>
	)
}

export default PopupWithForm;