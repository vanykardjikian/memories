import React from 'react'

function Form(props) {

    const [formData, setFormData] = React.useState({
        title: "",
        subtitle: "",
        date: "",
        img: "",
    })


    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevData => {
            return ({...prevData, [name]: value})
        })
        
    }


    /*function handleSubmit(e) {
        e.preventDefault()
        console.log("here")
    }*/

    return (
        <form className={!props.darkMode ? "my-form" : "my-form dark"} onSubmit={(e) => props.handleSubmit(e, formData)}>
            <label htmlFor='title'>Title</label>
            <input 
            type="text" name="title" id="title" 
            onChange={handleChange}
            value={formData.title}>
            </input>
            <label htmlFor='subtitle'>Subtitle</label>
            <input type="text" name="subtitle" id="subtitle"
            onChange={handleChange} 
            value={formData.subtitle}>
            </input>
            <label htmlFor='date'>Date</label>
            <input type="date" name="date" id="date" 
            onChange={handleChange} 
            value={formData.date}>
            </input>
            <label htmlFor='img'>Image URL</label>
            <input type="url" name="img" id="img" 
            onChange={handleChange} 
            value={formData.img}>
            </input>
            <button className='btn'>Add</button>
        </form>
    )
}


export default Form