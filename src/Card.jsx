import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img ? props.img : props.imgFile}></img>
            <div className='btn-container'>
                <button className="delete-btn" title="Delete card" 
                    onClick={(e) => props.deleteCard(e, props.cardId)}>
                    <i className='bx bxs-trash' ></i>
                </button>
                <button className="edit-btn" title="Edit card" 
                    onClick={(e) => props.toggleNewForm(e, props.cardId)}>
                        <i className='bx bxs-edit'></i>
                </button>
            </div>

            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
            <p className="card-date">{props.date}</p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    imgFile: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    cardId: PropTypes.string,
    toggleNewForm: PropTypes.func,
    deleteCard: PropTypes.func
}


export default Card