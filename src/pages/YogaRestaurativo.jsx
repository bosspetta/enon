import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { usePagePath } from '../hooks'

export const handle = { bodyClass: 'yoga-restaurativo-page' }

export default function YogaRestaurativo() {
    const { t } = useTranslation('global')
    const path = usePagePath()
    return (
        <main className="page-content">
            <h1 className="page-title">{t( "yoga.restaurativo.title" )}</h1>
            <p>{t( "yoga.restaurativo.p1" )}</p>
            <p>{t( "yoga.restaurativo.p2" )}</p>
            <p>{t( "yoga.restaurativo.p3" )}</p>
            <p><Link to={path('horarios')} className="intro-links__link intro-links__link--alone">{t('cta.horarios')}</Link></p>
        </main>
    )
}
