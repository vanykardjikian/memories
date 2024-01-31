
import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import { nanoid } from "nanoid"

function App() {

	const [cards, setCards] = React.useState([])

	const [darkMode, setDarkMode] = React.useState(false)

	const [isNewFormVisible, setIsNewFormVisible] = React.useState(false)

	const [editableFormData, seteditableFormData] = React.useState({})

	function toggleNewForm(e, cardId) {
		console.log("id: " + cardId)
		setIsNewFormVisible(isNewFormVisible => !isNewFormVisible);
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
			/>
		)
	})



	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<div className={!darkMode ? "" : "dark"}>
				<button onClick={toggleNewForm}>Add Photo</button>
				{isNewFormVisible && <Form 
					handleSubmit={handleSubmit} 
					toggleNewForm={toggleNewForm} 
					editableFormData={editableFormData}
				/>}
			</div>
			<main className={!darkMode ? "" : "dark"}>
				{cardComponents.length ?
					<div className="cards-container">
						{cardComponents}
					</div> :
					<p className='empty-album'>You have no photos in your album</p>

				}
			</main>
		</>
	)
}

export default App
