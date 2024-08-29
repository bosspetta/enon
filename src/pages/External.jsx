import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ctMeditationBudismo from '../assest/img/cartel-meditacion-budismo.jpeg'
import ctRestaurativo from '../assest/img/cartel-restaurativo.jpg'

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
    document.body.classList.remove('mindfulness-page')
    document.body.classList.add('external-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "external.title" )}</h2>
            <section id="activities-restaurativo">
                <h3>{t('main-menu.restaurativo')}</h3>
                <p className="activities__data"><img src={ctRestaurativo} alt="" className="activities__image" />
                {t('external.p-restaurativo')}</p>
            </section>
            <section id="activities-meditation">
                <h3>{t('schedules.meditacion')}</h3>
                <p className="activities__data"><img src={ctMeditationBudismo} alt="" className="activities__image" />
                {t('external.p-meditation')}</p>
                <p className="activities__data__info">
                    <strong>{t('external.p-meditation-3a')}</strong><br />
                    <strong>19:00h</strong> - <em>{t('external.p-meditation-3b')}</em>
                </p>
                <p className="activities__data__info">
                    <strong>{t('external.p-meditation-4a')}</strong><br />
                    <strong>19-20:30h</strong> - <em>{t('external.p-meditation-4b')}</em>
                </p>

                <p className="activities__data activities__data--more-info">
                    <Link to="https://centrobudista.online/?page_id=499" target="_blank" title="Ampliar información">{t('external.p-meditation-2')}</Link>
                </p>
            </section>
        </main>
    )
}
