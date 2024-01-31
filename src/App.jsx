
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
		console.log("id: " + cardId)
		setisFormVisible(isFormVisible => !isFormVisible);
		const tempFormData = cards.filter(card => card.cardId === cardId)[0]
		console.log(tempFormData)
		seteditableFormData({...tempFormData})
		
	}

	function toggleDarkMode() {
		setDarkMode(prevMode => !prevMode)
	}

	//console.log(cards)
	function handleSubmit(e, formData) {
		e.preventDefault()
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

	const cardComponents = cards.map(card => {
		return (
			<Card
				key={card.cardId}
				title={card.title}
				description={card.description}
				img={card.img}
				date={card.date}
				cardId = {card.cardId}
				toggleNewForm={toggleNewForm}
				deleteCard={deleteCard}
			/>
		)
	})



	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className={!darkMode ? "" : "dark"}>
			<div className={!darkMode ? "" : "dark"}>
				{isFormVisible && <Form 
					handleSubmit={handleSubmit} 
					toggleNewForm={toggleNewForm} 
					editableFormData={editableFormData}
				/>}

			</div>
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
