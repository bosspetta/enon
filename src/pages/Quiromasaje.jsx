import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { usePagePath } from '../hooks'

export const handle = { bodyClass: 'chiromassage-page' }

export default function Quiromasaje() {
    const { t } = useTranslation('global')
    const path = usePagePath()

    return (
        <main className="page-content">
            <h1 className="page-title">{t( "quiro.title" )}</h1>
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
            <p>{t( "quiro.p4" )} <a href="https://www.gandiva.es/" target="_blank" title={t('a11y.gandiva')} rel="noreferrer"><strong>Gandiva</strong>, {t( "quiro.gandiva" )}</a>.</p>
            <p><Link to={path('contacto')} className="intro-links__link intro-links__link--alone">{t('cta.cita')}</Link></p>
        </main>
    )
}
