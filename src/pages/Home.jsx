import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation('global')

    document.body.classList.remove('contact-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.add('home-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "home.welcome-title" )}</h2>
            <p>{t( "home.intro" )}</p>
            <ul className="intro-links">
                <li className="intro-links__item"><Link className="intro-links__link" to='/que-es-enon'>{t( "main-menu.que-es" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/yoga'>Yoga</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/yoga/restaurativo'>{t( "yoga-restaurativo" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/quiromasaje'>{t( "main-menu.quiromasaje" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/horarios'>{t( "main-menu.horarios" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/contacto'>{t( "main-menu.contacto" )}</Link></li>
                <li className="intro-links__item"><Link className="intro-links__link" to='/normas'>{t( "main-menu.politicas" )}</Link></li>
            </ul>
        </main>
    )
}
