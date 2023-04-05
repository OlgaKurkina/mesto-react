import React from 'react';
function Card(card) {
	return (

		<li className="element">
			<img src={card.link} className="element__img" alt={card.name} />
			<button className="element__trash" type="button"></button>
			<div className="element__content">
				<h2 className="element__name">{card.name}</h2>
				<div className="element__like-container">
					<button className="element__like" type="button"></button>
					<h3 className="element__like-counter">{card.likes}</h3>
				</div>
			</div>
		</li>

	)
}

export default Card;