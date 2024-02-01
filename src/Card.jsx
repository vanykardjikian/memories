import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img ? props.img : props.imgFile}></img>
            <div className='btn-container'>

                <button className="fav-btn" 
                onClick={(e) => props.toggleFavorite(e, props.cardId)}>
                    {
                        props.isFavorite ?
                        <i className='bx bxs-heart' title="Remove from favorites" ></i> :
                        <i className='bx bx-heart'  title="Add to favorites" ></i>
                    }
                    
                </button>

                <button className="edit-btn" title="Edit card" 
                    onClick={(e) => props.toggleNewForm(e, props.cardId)}>
                        <i className='bx bxs-edit'></i>
                </button>

                <button className="delete-btn" title="Delete card" 
                    onClick={(e) => props.deleteCard(e, props.cardId)}>
                    <i className='bx bxs-trash' ></i>
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
    isFavorite: PropTypes.bool,
    toggleFavorite: PropTypes.func,
    toggleNewForm: PropTypes.func,
    deleteCard: PropTypes.func
}


export default Card