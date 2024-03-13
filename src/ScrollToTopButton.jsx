import React from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    return (
        isVisible && (
            <button className="scroll-to-top-btn" onClick={scrollToTop}>
                <i className='bx bxs-chevron-up-square'></i>
            </button>
        )
    )
}

export default ScrollToTopButton