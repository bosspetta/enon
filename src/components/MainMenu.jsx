import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export default function MainMenu() {

    const { t } = useTranslation('global')

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
                        {t( "main-menu.inicio" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/que-es-enon'
                        onClick={hideMenu}>
                        {t( "main-menu.que-es" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/yoga'
                        onClick={hideMenu}>
                        Yoga
                    </NavLink>
                    <ul className="main-menu__items main-menu__items--inner">
                        <li className="main-menu__item">
                            <NavLink
                                className={({ isActive }) => isActive ? 'main-menu__link selected' : 'main-menu__link'}
                                to='/yoga/restaurativo'
                                onClick={hideMenu}>
                                {t( "main-menu.restaurativo" )}
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/quiromasaje'
                        onClick={hideMenu}>
                        {t( "main-menu.quiromasaje" )}
                    </NavLink>
                </li>
                <li className="main-menu__item">
                    <NavLink
                        className={ ({isActive}) => isActive ? 'main-menu__link selected' : 'main-menu__link' }
                        to='/contacto'
                        onClick={hideMenu}>
                        {t( "main-menu.contacto" )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
