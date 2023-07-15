import { useTranslation } from 'react-i18next'

export default function Yoga() {
    document.body.className = ''
    document.body.classList.add('yoga-page')
    const { t } = useTranslation('global')
    return (
        <main>
            <h2 className="page-title">Yoga</h2>
            <p>{t( "yoga.hatha.paragraph-1" )}</p>
            <p>{t( "yoga.hatha.paragraph-2" )}</p>
            <p>{t( "yoga.hatha.paragraph-3" )}</p>
            <p className="quote-author"><em>— Carlos Fiel</em></p>
        </main>
    )
}
