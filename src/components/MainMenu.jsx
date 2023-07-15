import { NavLink } from "react-router-dom"

export default function MainMenu() {
    return (
        <nav id="main-menu" className="main-menu">
            <ul className="main-menu__items">
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/'>
                        Inicio
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/que-es-enon'>
                        ¿Qué es <strong>enON</strong>?
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/yoga'>
                        Yoga
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/quiromasaje'>
                        Quiromasaje
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/contacto'>
                        Visítanos / Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
