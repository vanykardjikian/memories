import React from 'react'
import PropTypes from 'prop-types';

function Form(props) {

    const [formData, setFormData] = React.useState({
        title: "",
        subtitle: "",
        date: "",
        img: "",
        id: "",
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
        <div className='form-popup'>
            <div className='form-popup-inner'>
                <form className="my-form" onSubmit={(e) => props.handleSubmit(e, formData)}>
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
                    <div className='form-btns'>
                        <button type='submit' className='add' title="Add photo">Add</button>
                        <button type="button" className='cancel' 
                            title="Cancel" onClick={props.toggleNewForm}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )
}


Form.propTypes = {
    handleSubmit: PropTypes.func,
    toggleNewForm: PropTypes.func,
}


export default Form