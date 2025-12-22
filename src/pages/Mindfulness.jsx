import { useTranslation } from 'react-i18next'

import dosier from '../assest/files/mindfulness-8-semanas-enon.pdf'

export default function Yoga() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.remove('external-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('bono-regalo')
    document.body.classList.add('mindfulness-page')

    const { t } = useTranslation('global')
    return (
        <main className="page-content">
            <h2 className="page-title">{t("mf.title")}</h2>
            <h3 className="page-title--subtitle">{t("mf.sub-title")}</h3>
            <ul className="u-list">
                <li>{t("mf.list-01")}
                    <ul className="u-list">
                        <li>{t("mf.list-02")}</li>
                        <li>{t("mf.list-03")}</li>
                        <li>{t("mf.list-04")}</li>
                        <li>{t("mf.list-05")}</li>
                        <li>{t("mf.list-06")}</li>
                    </ul>
                </li>
                <li>{t("mf.list-07")}</li>
                <li>{t("mf.list-08")}</li>
                <li>{t("mf.list-09")}</li>
            </ul>
            <p>{t("mf.p-01")} <a href="https://api.whatsapp.com/send/?phone=34640029302" target="_blank" rel="noreferrer" title="Acceder a WhatsApp para enviar un mensaje">640 029 302</a>.</p>
            <p>{t("mf.p-02")}</p>
            <p><a href={dosier} target="_blank" rel="noreferrer" title={t("mf.download-title")} className="intro-links__link intro-links__link--alone">{t("mf.download")}</a></p>
        </main>
    )
}
