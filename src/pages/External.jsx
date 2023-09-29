import { useTranslation } from 'react-i18next'

import ctTaichi from '../assest/img/cartel-taichi.png'
import ctMeditation from '../assest/img/cartel-meditacion.jpg'

export default function External() {
    const { t } = useTranslation('global')

    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.remove('contact-page')
    document.body.classList.add('external-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "external.title" )}</h2>
            <section id="activities-taichi">
                <h3>Tai Chi</h3>
                <p className="activities__data"><img src={ctTaichi} alt="" className="activities__image" />
                {t('external.p-taichi')}</p>
            </section>
            <section id="activities-meditation">
                <h3>{t('schedules.meditacion')}</h3>
                <p className="activities__data"><img src={ctMeditation} alt="" className="activities__image" />
                {t('external.p-meditation')}</p>
            </section>
        </main>
    )
}
