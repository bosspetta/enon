import { Link } from 'react-router'
import { usePagePath } from '../hooks'
import { useTranslation } from 'react-i18next'

export const handle = { bodyClass: 'home-page' }

export default function Home() {
    const { t } = useTranslation('global')
    const path = usePagePath()

    return (
        <main className="page-content">
            <h1 className="page-title">{t( "home.welcome-title" )}</h1>
            <p>{t( "home.intro" )}</p>
            <ul className="intro-links">
                <li className="intro-links__item intro-links__item--full"><Link className="intro-links__link intro-links__link--regalo" to={path('bono-regalo')}>{t( "main-menu.bono-regalo" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to={path('enon')}>{t( "main-menu.que-es" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to={path('yoga')}>{t( "main-menu.yoga-classes" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to={path('yoga-restaurativo')}>{t( "yoga-restaurativo" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to={path('masaje')}>{t( "main-menu.quiromasaje" )}</Link></li>
                {/* "Más actividades" oculta (ver hidden en site.js)
                <li className="intro-links__item"><Link className="intro-links__link intro-links__link--destacado" to={path('actividades')}>{t("main-menu.actividades")}</Link></li>
                */}
                <li className="intro-links__item"><Link className="intro-links__link" to={path('horarios')}>{t( "main-menu.horarios" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to={path('contacto')}>{t( "main-menu.contacto" )}</Link></li>
            </ul>
        </main>
    )
}
