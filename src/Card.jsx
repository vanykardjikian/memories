import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img}></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-description">{props.description}</p>
            <p className="card-date">{props.date}</p>
            <button onClick={(e) => props.toggleNewForm(e, props.cardId)}>Edit</button>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    cardId: PropTypes.string,
    toggleNewForm: PropTypes.func
}


export default Card