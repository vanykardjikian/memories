function Card(props) {
    console.log("props" + props)

    return (
        <div className="card">
            <img className="card-img" src={props.img}></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-subtitle">{props.subtitle}</p>
            <p className="card-date">{props.date}</p>
        </div>
    )
}

export default Card