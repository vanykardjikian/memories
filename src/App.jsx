
import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import { nanoid } from "nanoid"


function App() {

	const [cards, setCards] = React.useState([])

	const [visibleCards, setVisibleCards] = React.useState("all")

	const [darkMode, setDarkMode] = React.useState(false)

	const [isFormVisible, setIsFormVisible] = React.useState(false)

	const [editableFormData, setEditableFormData] = React.useState({})

	function toggleNewForm(e, cardId) {
		setIsFormVisible(isFormVisible => !isFormVisible);
		const tempFormData = cards.filter(card => card.cardId === cardId)[0]
		setEditableFormData({...tempFormData})
	}


	React.useEffect(() => {
		const defaultCards = [
		{
			cardId: nanoid(),
			title: "Add Cards to Favorites",
			description: "Save your favorite photos for quick access!",
			img: 'https://i.imgur.com/VBjwEqp.png',
			date: "2024-01-29",
			isFavorite: false
		},
		{
			cardId: nanoid(),
			title: "Edit Your Cards",
			description: "Easily modify the details of your cards!",
			img: 'https://i.imgur.com/oAoRDYS.png',
			date: "2024-01-29",
			isFavorite: false
		},
		{
			cardId: nanoid(),
			title: "Delete Unwanted Cards",
			description: "Easily remove unwanted photos!",
			img: 'https://i.imgur.com/QGOpTmU.png',
			date: "2024-01-29",
			isFavorite: false
		}
		]

        setCards(defaultCards)
    }, []);


	function toggleDarkMode() {
		setDarkMode(prevMode => !prevMode)
	}


	function isImage(url) {
		return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(url);
	}


	function handleSubmit(e, formData) {
		e.preventDefault()
		console.log(formData)
		if(!formData.imgFile && !formData.img) {
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
			console.log(temp)
			return temp
		})
	}

	function showFavorites() {
		setVisibleCards("fav")
	}

	function showAll() {
		setVisibleCards("all")
	}
	
	function generateCardComponents(cardsArr) {
		return cardsArr.map(card => {
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
	}


	let cardComponents = []
	if (visibleCards === "all") {
		cardComponents = generateCardComponents(cards)
	} else {
		const favoriteCards = cards.filter(card => card.isFavorite)
		cardComponents = generateCardComponents(favoriteCards)
	}

	


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
			
			<div className='btns-container'>
				<div className='visible-btn-container'>
					<button className={visibleCards == "all" ? 'visible-btn active' : 'visible-btn'} 
					onClick={showAll}>All</button>

					<button className={visibleCards == "fav" ? 'visible-btn active' : 'visible-btn'} 
					onClick={showFavorites}>Favorites</button>

				</div>

				<button 
					className='new-btn'
					onClick={toggleNewForm}>
						<i className='bx bx-plus-circle'></i><h4>&nbsp;New Card</h4>
				</button>
			</div>
			
			
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
