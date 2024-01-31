import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.img}></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-subtitle">{props.subtitle}</p>
            <p className="card-date">{props.date}</p>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string
}


export default Card