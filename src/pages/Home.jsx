import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation('global')

    document.body.classList.remove('contact-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.add('home-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "home.welcome-title" )}</h2>
        </main>
    )
}
