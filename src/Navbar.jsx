import PropTypes from 'prop-types';

function Navbar(props) {
    return(
    <nav 
        className={props.darkMode ? "dark": ""}
    >
        <h1 className="nav-title">Memories</h1>
        <div 
            className="toggler-container" 
        >
        <span className='toggler-text light'>Light</span>
        <button onClick={props.toggleDarkMode} className="toggler" title="Toggle dark mode">
           { !props.darkMode ? 
           <i className='bx bx-toggle-left toggle-btn' ></i> : 
           <i className='bx bxs-toggle-right toggle-btn'></i>
           }
        </button>
        <span className='toggler-text'>Dark</span>
        </div>
    </nav>)
}

Navbar.propTypes = {
    darkMode: PropTypes.bool,
    toggleDarkMode: PropTypes.func,
}


export default Navbar