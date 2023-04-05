import React from 'react';
function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	}
	return (
		<li className="element">
			<img src={props.card.link} className="element__img" alt={props.card.name} onClick={handleClick} />
			<button className="element__trash" type="button" onClick={props.onConfirmDelete}></button>
			<div className="element__content">
				<h2 className="element__name">{props.card.name}</h2>
				<div className="element__like-container">
					<button className="element__like" type="button"></button>
					<h3 className="element__like-counter">{props.card.likes.length}</h3>
				</div>
			</div>
		</li>
	)
}

export default Card;