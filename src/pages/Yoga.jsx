import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { usePagePath } from '../hooks'

export const handle = { bodyClass: 'yoga-page' }

export default function Yoga() {
    const { t } = useTranslation('global')
    const path = usePagePath()
    return (
        <main className="page-content">
            <h1 className="page-title">{t("yoga.title")}</h1>
            <h2 className="page-title--subtitle">{t("yoga.enon.title")}</h2>
            <p>{t( "yoga.enon.p1" )}</p>
            <p>{t( "yoga.enon.p2" )}</p>
            <p>{t( "yoga.enon.p3" )}</p>
            <h2 className="page-title--subtitle">{t( "yoga.subtitle" )}</h2>
            <p>{t( "yoga.hatha.paragraph-1" )}</p>
            <p>{t( "yoga.hatha.paragraph-2" )}</p>
            <p>{t( "yoga.hatha.paragraph-3" )}</p>
            <p className="quote-author"><em>— Carlos Fiel</em></p>
            <p><Link to={path('horarios')} className="intro-links__link intro-links__link--alone">{t('cta.horarios')}</Link></p>
        </main>
    )
}
