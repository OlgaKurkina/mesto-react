import React from 'react';
import editBtnImg from '../images/Edit_icon.svg';
import addBtnImg from '../images/Add_icon.svg';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getCards()
			.then(cards => {
				setCards(cards);
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	React.useEffect(() => {
		api.getUserData()
			.then((data) => {
				setUserName(data.name);
				setUserDescription(data.about);
				setUserAvatar(data.avatar)
			})
			.catch((err) => {
				console.log(err);
			})
	}, [])

	return (
		<main
			className="page">
			<section
				className="profile"
				aria-label="Профиль пользователя">
				<div
					className="profile__avatar">
					<button
						className="profile__avatar-button"
						type="button"
						aria-label="Редактировать аватар"
						onClick={props.onEditAvatar}>
						<img
							className="profile__image"
							src={userAvatar}
							alt={userName} />
					</button>
				</div>
				<div
					className="profile__info">
					<div
						className="profile__name">
						<h1
							className="profile__user-name">
							{userName}
						</h1>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Кнопка Редактировать"
							onClick={props.onEditProfile}>
							<img
								className="profile__edit-img"
								src={editBtnImg}
								alt="Кнопка Редактировать" />
						</button>
					</div>
					<p
						className="profile__user-description">
						{userDescription}
					</p>
				</div>
				<button
					className="profile__add-button"
					type="button"
					aria-label="Кнопка Добавить"
					onClick={props.onAddPlace}>
					<img
						className="profile__add-img"
						src={addBtnImg}
						alt="Кнопка Добавить" />
				</button>
			</section>
			<section
				className="elements"
				aria-label="Блок картинок">
				<ul
					className="elements__list">
					{cards.map((card) => (
						<Card key={
							card._id}
							card={card}
							onCardClick={props.onCardClick} />))}
				</ul>
			</section>
		</main>
	)
}

export default Main;