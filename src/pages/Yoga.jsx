import { useTranslation } from 'react-i18next'

export default function Yoga() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.add('yoga-page')

    const { t } = useTranslation('global')
    return (
        <main className="page-content">
            <h2 className="page-title">{t("yoga.title")}</h2>
            <h3 className="page-title--subtitle">{t("yoga.enon.title")}</h3>
            <p>{t( "yoga.enon.p1" )}</p>
            <p>{t( "yoga.enon.p2" )}</p>
            <p>{t( "yoga.enon.p3" )}</p>
            <h3 className="page-title--subtitle">{t( "yoga.subtitle" )}</h3>
            <p>{t( "yoga.hatha.paragraph-1" )}</p>
            <p>{t( "yoga.hatha.paragraph-2" )}</p>
            <p>{t( "yoga.hatha.paragraph-3" )}</p>
            <p className="quote-author"><em>— Carlos Fiel</em></p>
        </main>
    )
}
