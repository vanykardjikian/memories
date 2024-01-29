
import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'

function App() {

  const [cards, setCards] = React.useState([])

  const [darkMode, setDarkMode] = React.useState(false)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }


  //console.log(cards)
  function handleSubmit(e, formData) {
    
    e.preventDefault()
    setCards(prevCards => [...prevCards, formData])
  }

  const cardComponents = cards.map(component => {
    return (
    <Card 
      title={component.title} 
      subtitle={component.subtitle}
      img={component.img}
      date={component.date}
      />
    )
  })

  //console.log(cards)


  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Form handleSubmit={handleSubmit} darkMode={darkMode}/>
      <div className={!darkMode ? "cards-container" : "cards-container dark"}>
        {cardComponents}
      </div>
      
    </>
  )
}

export default App
