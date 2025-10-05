// import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// import ctMeditationBudismo from '../assest/img/cartel-meditacion-budismo.jpeg'
import ctRestaurativo from '../assest/img/cartel-restaurativo.jpg'
import ctMeditacionMindfulness from '../assest/img/cartel-meditacion-mindfulness.jpg'

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
                <p className="activities__data">
                    <img src={ctRestaurativo} alt="" className="activities__image" />
                    {t('external.p-restaurativo')}
                </p>
            </section>
            <section id="activities-restaurativo">
                <h3>{t('external.p-mind-title')}</h3>
                <p className="activities__data">
                    <img src={ctMeditacionMindfulness} alt="" className="activities__image" />
                    <span className="activities__data__text">
                        <span className="activities activities__data__text__item activities__data__text__item--title">{t('external.p-mind-title-1')}</span>
                        <span className="activities activities__data__text__item activities__data__text__item--content">{t('external.p-mind-1')}</span>

                        <span className="activities activities__data__text__item activities__data__text__item--title">{t('external.p-mind-title-2')}</span>
                        <span className="activities activities__data__text__item activities__data__text__item--content">{t('external.p-mind-2')}</span>

                        <span className="activities activities__data__text__item activities__data__text__item--title">{t('external.p-mind-title-3')}</span>
                        <span className="activities activities__data__text__item activities__data__text__item--content">{t('external.p-mind-3')}</span>

                        <span className="activities activities__data__text__item activities__data__text__item--close">{t('external.p-mind-close')}</span>
                    </span>
                </p>
            </section>
        </main>
    )
}
