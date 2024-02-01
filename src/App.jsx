
import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import { nanoid } from "nanoid"

function App() {

	const [cards, setCards] = React.useState([])

	const [darkMode, setDarkMode] = React.useState(false)

	const [isFormVisible, setisFormVisible] = React.useState(false)

	const [editableFormData, seteditableFormData] = React.useState({})

	function toggleNewForm(e, cardId) {
		setisFormVisible(isFormVisible => !isFormVisible);
		const tempFormData = cards.filter(card => card.cardId === cardId)[0]
		seteditableFormData({...tempFormData})
		
	}

	function toggleDarkMode() {
		setDarkMode(prevMode => !prevMode)
	}


	function isImage(url) {
		return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
	}


	function handleSubmit(e, formData) {
		e.preventDefault()

		if(!formData.imgFileName && !formData.img) {
			alert("Please add an image")
			return
		}

		if(formData.imgFileName && !isImage(formData.imgFileName)) {
			alert("Invalid file type")
			return
		}

		if(formData.img && !isImage(formData.img)) {
			alert("Invalid URL")
			return
		}

		if (!formData.cardId) {
			setCards(prevCards => [...prevCards, { ...formData, cardId: nanoid() }])
		} else {
			setCards(prevCards => {
				const temp = prevCards.map(card => {
					return card.cardId === formData.cardId ? 
					{...formData, cardId: card.cardId} :
					card
				})
				return temp
			})
		}
		
		toggleNewForm()
	}


	function deleteCard(e, targetId) {
		setCards(prevCards => {
			return prevCards.filter(card => card.cardId !== targetId)
		})
	}


	function toggleFavorite(e, targetId) {
		setCards(prevCards => {
			const temp = prevCards.map(card => {
				return card.cardId === targetId ? 
				{...card, isFavorite: !card.isFavorite} :
				card
			})
			return temp
		})
	}


	const cardComponents = cards.map(card => {
		return (
			<Card
				key={card.cardId}
				title={card.title}
				description={card.description}
				img={card.img}
				imgFile={card.imgFile}
				date={card.date}
				cardId = {card.cardId}
				isFavorite={card.isFavorite}
				toggleFavorite={toggleFavorite}
				toggleNewForm={toggleNewForm}
				deleteCard={deleteCard}
			/>
		)
	})


	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


			<div className={!darkMode ? "" : "dark"}>

				{isFormVisible && <Form 
					handleSubmit={handleSubmit} 
					toggleNewForm={toggleNewForm} 
					editableFormData={editableFormData}
				/>}

			</div>

			<main className={!darkMode ? "" : "dark"}>
	
			<button 
				className='new-btn'
				onClick={toggleNewForm}>
					<i className='bx bx-plus-circle'></i><h4>&nbsp;New Card</h4>
			</button>
				{cardComponents.length ?
					<div className="cards-container">
						{cardComponents}
					</div> :
					<p className='empty-album'>You have no photos in your album!</p>
				}
			</main>
		</>
	)
}

export default App
