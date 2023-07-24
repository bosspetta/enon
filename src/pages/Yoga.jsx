import { useTranslation } from 'react-i18next'

export default function Yoga() {
    document.body.className = ''
    document.body.classList.add('yoga-page')
    const { t } = useTranslation('global')
    return (
        <main>
            <h2 className="page-title">{t("yoga.title")}</h2>
            <h3 className="page-title--subtitle">{t( "yoga.subtitle" )}</h3>
            <p>{t( "yoga.hatha.paragraph-1" )}</p>
            <p>{t( "yoga.hatha.paragraph-2" )}</p>
            <p>{t( "yoga.hatha.paragraph-3" )}</p>
            <p className="quote-author"><em>— Carlos Fiel</em></p>
        </main>
    )
}
