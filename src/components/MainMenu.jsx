import { NavLink } from "react-router-dom"

export default function MainMenu() {

    const hideMenu = () => {
        document.body.classList.remove('menu-opened')
        document.getElementById('main-menu').classList.remove('menu-opened')
        document.getElementById('btn-menu').classList.remove('is-active')
    }

    return (
        <nav id="main-menu" className="main-menu">
            <ul className="main-menu__items">
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/'
                        onClick={hideMenu}>
                        Inicio
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/que-es-enon'
                        onClick={hideMenu}>
                        ¿Qué es <strong>enON</strong>?
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/yoga'
                        onClick={hideMenu}>
                        Yoga
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/quiromasaje'
                        onClick={hideMenu}>
                        Quiromasaje
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/contacto'
                        onClick={hideMenu}>
                        Visítanos / Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
