import PropTypes from 'prop-types';
import logo from './logo.png'
function Navbar(props) {
    return(
    <nav 
        className={props.darkMode ? "dark": ""}
    >
        <a className="nav-logo" href="#"><img src={logo}></img></a>
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