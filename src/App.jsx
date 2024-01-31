
import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import { nanoid } from "nanoid"

function App() {

	const [cards, setCards] = React.useState([])

	const [darkMode, setDarkMode] = React.useState(false)

	const [isNewFormVisible, setIsNewFormVisible] = React.useState(false)

	function toggleNewForm() {
		setIsNewFormVisible(isNewFormVisible => !isNewFormVisible);
	}

	function toggleDarkMode() {
		setDarkMode(prevMode => !prevMode)
	}

	//console.log(cards)
	function handleSubmit(e, formData) {
		e.preventDefault()
		setCards(prevCards => [...prevCards, { ...formData, id: nanoid() }])
		toggleNewForm()
	}

	const cardComponents = cards.map(card => {
		return (
			<Card
				key={card.id}
				title={card.title}
				subtitle={card.subtitle}
				img={card.img}
				date={card.date}
			/>
		)
	})

	//console.log(cards)


	return (
		<>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<div className={!darkMode ? "" : "dark"}>
				<button onClick={toggleNewForm}>Add Photo</button>
				{isNewFormVisible && <Form handleSubmit={handleSubmit} toggleNewForm={toggleNewForm} />}
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
