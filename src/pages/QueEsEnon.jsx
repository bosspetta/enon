import { useTranslation } from 'react-i18next'

export default function QueEsEnon() {
    document.body.className = ''
    document.body.classList.add('enon-page')
    const { t } = useTranslation('global')

    return (
        <main>
            <h2 className="page-title">{t( "enon.title" )}</h2>
            <p>{t( "enon.desc-a" )}</p>
            <p>{t( "enon.desc-b" )}</p>
        </main>
    )
}
