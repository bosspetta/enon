import { useTranslation } from 'react-i18next'

export const handle = { bodyClass: 'yoga-restaurativo-page' }

export default function YogaRestaurativo() {
    const { t } = useTranslation('global')
    return (
        <main className="page-content">
            <h2 className="page-title">{t( "yoga.restaurativo.title" )}</h2>
            <p>{t( "yoga.restaurativo.p1" )}</p>
            <p>{t( "yoga.restaurativo.p2" )}</p>
            <p>{t( "yoga.restaurativo.p3" )}</p>
        </main>
    )
}
