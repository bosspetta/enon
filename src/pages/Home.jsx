import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

export const handle = { bodyClass: 'home-page' }

export default function Home() {
    const { t } = useTranslation('global')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "home.welcome-title" )}</h2>
            <p>{t( "home.intro" )}</p>
            <ul className="intro-links">
                <li className="intro-links__item"><Link className="intro-links__link" to='/que-es-enon/'>{t( "main-menu.que-es" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/yoga/'>Yoga Classes</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/yoga/restaurativo/'>{t( "yoga-restaurativo" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/masaje/'>{t( "main-menu.quiromasaje" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/mindfulness/'>{t("main-menu.mindfulness")}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link intro-links__link--destacado" to='/mas-actividades/'>{t("main-menu.actividades")}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/horarios/'>{t( "main-menu.horarios" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/contacto/'>{t( "main-menu.contacto" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/normas/'>{t( "main-menu.politicas" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/bono-regalo/'>{t( "main-menu.bono-regalo" )}</Link></li>
            </ul>
        </main>
    )
}
