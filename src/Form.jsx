import React from 'react'
import PropTypes from 'prop-types';

function Form(props) {

    const [formData, setFormData] = React.useState(
    Object.keys(props.editableFormData).length !== 0 ?
    {
        ...props.editableFormData
    }
    :
    {
        title: "",
        description: "",
        date: "",
        img: "",
        cardId: "",
    }
    )


    
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
                <form className="my-form" autoComplete="off"
                    onSubmit={(e) => Object.keys(props.editableFormData).length === 0 ? 
                        props.handleSubmit(e, formData) :
                        props.handleSubmit(e, {...formData, cardId: props.editableFormData.cardId})
                    }>
                    <label htmlFor='title'>Title</label>
                    <input 
                    type="text" name="title" id="title" 
                    onChange={handleChange}
                    value={formData.title}>
                    </input>
                    <label htmlFor='description'>Description</label>
                    <input type="text" name="description" id="description"
                    onChange={handleChange} 
                    value={formData.description}>
                    </input>
                    <label htmlFor='date'>Date</label>
                    <input type="date" name="date" id="date" 
                    onChange={handleChange} 
                    value={formData.date}>
                    </input>
                    <label htmlFor='img'>Image URL</label>
                    <input type="url" name="img" id="img" required 
                    onChange={handleChange} 
                    value={formData.img}>
                    </input>
                    <div className='form-btns'>
                        <button className='add' title="Add photo">
                            {Object.keys(props.editableFormData).length === 0 ? 'Add' : 'Save'}
                            </button>
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
    editableFormData: PropTypes.object
}


export default Form