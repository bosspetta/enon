import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}

ScrollToTop.propTypes = {
    children: PropTypes.object
}

export default ScrollToTop
