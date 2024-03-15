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
        imgFileName: "",
        cardId: "",
        isFavorite: false
    }
    )


    
    function handleChange(e) {
        const {name, value, files} = e.target
        let imgFileName = ""
        if (files) {
            imgFileName = files[0].name
        }
        setFormData(prevData => {
            return ({...prevData, imgFileName: imgFileName, [name]: name === "imgFile" ? URL.createObjectURL(files[0]): value})
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
                    <div className='header'>
                        {
                        props.errorMessage && 
                        <div className='error-msg'>
                            <h6 id='error-title'>Error</h6>
                            <p>{props.errorMessage}</p>
                        </div>
                        }
                    <button className='x-btn' onClick={props.toggleNewForm}><i className='bx bx-x'></i></button>
                    </div>
                    

                    
                    <label htmlFor='title'>Title <span>(optional)</span></label>
                    <input 
                    maxLength="25"
                    type="text" name="title" id="title" 
                    onChange={handleChange}
                    value={formData.title}>
                    </input>
                    <div className="counter">{formData.title.length}/25</div>
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

                    {
                    !formData.imgFile &&
                    
                    <>
                    <label htmlFor='img-url'>Image URL <span>(must end in jpg, jpeg, png, webp, avif, gif or svg)</span></label>
                    <input type="url" name="img" id="img-url"
                    onChange={handleChange} 
                    value={formData.img}>
                    </input>
                    </>
                    }

                    {
                    (!formData.img && !formData.imgFile) &&
                    <div 
                    style={{
                        display: "flex", justifyContent: "center", 
                        width: "100%", fontSize: "1.1rem", marginTop: "10px"
                    }}>

                    <i>OR</i>
                    </div>
                    }
                    {
                    !formData.img &&
                    <>
                    <label htmlFor="img-file">Upload image</label>
                    <input type="file" id="img-file" name="imgFile" accept="image/*"
                        onChange={handleChange}>
                    </input>
                    
                    </>
                    }


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
    editableFormData: PropTypes.object,
    errorMessage:PropTypes.string,
}


export default Form