import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { usePagePath } from '../hooks'

export const handle = { bodyClass: 'no-found-page' }

export default function NoMatch() {
    const { t } = useTranslation('global')
    const path = usePagePath()

    return (
        <main className="page-content">
            <h1 className="page-title">{t('notfound.title')}</h1>
            <p>{t('notfound.text')}</p>
            <p><Link to={path('home')} className="intro-links__link intro-links__link--alone">{t('notfound.link')}</Link></p>
        </main>
    )
}
