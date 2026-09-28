import { useTranslation } from 'react-i18next'
import Gallery from '../components/Gallery'

import isa from '../assest/img/enon-ceo.jpg'

export const handle = { bodyClass: 'enon-page' }

export default function QueEsEnon() {
    const { t } = useTranslation('global')

    return (
        <main className="page-content">
            <h1 className="page-title">{t( "enon.title" )}</h1>
            <p>{t( "enon.desc-a" )}</p>
            <p>{t( "enon.desc-b" )}</p>
            <h2 className="page-title--subtitle">{t( "enon.subtitle" )}</h2>
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
