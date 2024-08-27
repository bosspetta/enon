import { useTranslation } from 'react-i18next'
import Gallery from '../components/Gallery'

import isa from '../assest/img/enon-ceo.jpg'

export default function QueEsEnon() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.remove('external-page')
    document.body.classList.remove('mindfulness-page')
    document.body.classList.add('enon-page')

    const { t } = useTranslation('global')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "enon.title" )}</h2>
            <p>{t( "enon.desc-a" )}</p>
            <p>{t( "enon.desc-b" )}</p>
            <h3 className="page-title--subtitle">{t( "enon.subtitle" )}</h3>
            <h4>{t( "isa" )}</h4>
            <p className="img-wrapper img-wrapper--flr"><img src={isa} alt="Isabel Martínez San Esteban, CEO enON" /></p>
            <p>{t( "enon.paragraph" )}</p>
            <ul>
                <li>{t( "enon.item-1" )}</li>
                <li>{t( "enon.item-2" )}</li>
                <li>{t( "enon.item-3" )}</li>
                <li>{t( "enon.item-4" )}</li>
                <li>{t( "enon.item-5" )}</li>
                <li>{t( "enon.item-6" )}</li>
                <li>{t( "enon.item-7" )}</li>
                <li>{t( "enon.item-8" )}</li>
                <li>{t( "enon.item-9" )}</li>
            </ul>
            <Gallery />
        </main>
    )
}
