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
        imgFile: "",
        cardId: "",
    }
    )


    
    function handleChange(e) {
        const {name, value, files} = e.target
        setFormData(prevData => {
            return ({...prevData, [name]: name === "imgFile" ? URL.createObjectURL(files[0]): value})
        })
        
    }


    return (
        <div className='form-popup'>
            <div className='form-popup-inner'>
                <form className="my-form" autoComplete="off"
                    onSubmit={(e) => Object.keys(props.editableFormData).length === 0 ? 
                        props.handleSubmit(e, formData) :
                        props.handleSubmit(e, {...formData, cardId: props.editableFormData.cardId})
                    }>
                    <label htmlFor='title'>Title <span>(optional)</span></label>
                    <input 
                    type="text" name="title" id="title" 
                    onChange={handleChange}
                    value={formData.title}>
                    </input>
                    <label htmlFor='description'>Description <span>(optional)</span></label>
                    <input type="text" name="description" id="description"
                    onChange={handleChange} 
                    value={formData.description}>
                    </input>
                    <label htmlFor='date'>Date <span>(optional)</span></label>
                    <input type="date" name="date" id="date" 
                    onChange={handleChange} 
                    value={formData.date}>
                    </input>
                    <label htmlFor='img-url'>Image URL <span>(must end in jpg, jpeg, png, webp, avif, gif or svg)</span></label>
                    <input type="url" name="img" id="img-url"
                    onChange={handleChange} 
                    value={formData.img}>
                    </input>


                    <label htmlFor="img-file">Select image:</label>
                    <input type="file" id="img-file" name="imgFile" accept="image/*"
                    onChange={handleChange}>
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