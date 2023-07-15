import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation('global')
    document.body.className = ''
    document.body.classList.add('home-page')
    return (
        <main>
            <h2 className="page-title">{t( "home.welcome-title" )}</h2>
        </main>
    )
}
