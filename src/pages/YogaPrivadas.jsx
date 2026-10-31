import { Link } from 'react-router'
import { Trans, useTranslation } from 'react-i18next'
import { usePagePath } from '../hooks'

export const handle = { bodyClass: 'yoga-privadas-page' }

// Etiquetas permitidas dentro de los textos traducidos
const rich = { strong: <strong />, em: <em /> }

export default function YogaPrivadas() {
    const { t } = useTranslation('global')
    const path = usePagePath()
    return (
        <main className="page-content">
            <h1 className="page-title">{t( "yoga.privadas.title" )}</h1>

            <h2 className="page-title--subtitle">{t( "yoga.privadas.metodo-title" )}</h2>
            <p><Trans t={t} i18nKey="yoga.privadas.metodo-p" components={rich} /></p>

            <h2 className="page-title--subtitle">{t( "yoga.privadas.dirigido-title" )}</h2>
            <ul className="u-list">
                <li><Trans t={t} i18nKey="yoga.privadas.dirigido-l1" components={rich} /></li>
                <li><Trans t={t} i18nKey="yoga.privadas.dirigido-l2" components={rich} /></li>
            </ul>

            <h2 className="page-title--subtitle">{t( "yoga.privadas.patologias-title" )}</h2>
            <ul className="u-list">
                <li>{t( "yoga.privadas.patologias-l1" )}</li>
                <li>{t( "yoga.privadas.patologias-l2" )}</li>
            </ul>

            <h2 className="page-title--subtitle">{t( "yoga.privadas.metodologia-title" )}</h2>
            <h3>{t( "yoga.privadas.equipo-title" )}</h3>
            <p>{t( "yoga.privadas.equipo-p" )}</p>
            <h3>{t( "yoga.privadas.holistica-title" )}</h3>
            <p>{t( "yoga.privadas.holistica-p" )}</p>
            <h3>{t( "yoga.privadas.dolor-title" )}</h3>
            <p>{t( "yoga.privadas.dolor-p" )}</p>
            <h3>{t( "yoga.privadas.psicopostural-title" )}</h3>
            <p>{t( "yoga.privadas.psicopostural-p" )}</p>
            <h3>{t( "yoga.privadas.tareas-title" )}</h3>
            <p>{t( "yoga.privadas.tareas-p" )}</p>

            <p>{t( "yoga.privadas.info" )} <a href="tel:+34640029302" title={t('a11y.call')}><strong>640 029 302</strong></a>.</p>
            <p><Link to={path('contacto')} className="intro-links__link intro-links__link--alone">{t('cta.cita')}</Link></p>
        </main>
    )
}
