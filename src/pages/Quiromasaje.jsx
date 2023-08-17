import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Quiromasaje() {
    const { t } = useTranslation('global')

    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.add('chiromassage-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "quiro.title" )}</h2>
            <p>{t( "quiro.p1" )}</p>
            <p><strong>{t( "quiro.p2" )}</strong></p>
            <ul>
                <li>{t( "quiro.l1" )}</li>
                <li>{t( "quiro.l2" )}</li>
                <li>{t( "quiro.l3" )}</li>
                <li>{t( "quiro.l4" )}</li>
                <li>{t( "quiro.l5" )}</li>
            </ul>
            <p>{t( "quiro.p3" )}</p>
            <p>{t( "quiro.p4" )} <a href="https://www.gandiva.es/" target="_blank" title="Gandiva Website" rel="noreferrer"><strong>Gandiva</strong>, cosmética vegetal</a>.</p>
        </main>
    )
}
