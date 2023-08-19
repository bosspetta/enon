import { useTranslation } from 'react-i18next'

export default function YogaRestaurativo() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.add('yoga-restaurativo-page')

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
