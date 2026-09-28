import { useTranslation } from 'react-i18next'

export const handle = { bodyClass: 'contact-page' }

export default function Contacto() {
    const { t } = useTranslation('global')

    return (
        <main className="page-content">
            <h1 className="page-title">{t( "contacto.title" )}</h1>
            <h2 className="page-title--subtitle">{t( "contacto.subtitle-1" )}</h2>
            <ul>
                <li><strong>{t( "contacto.tlfLabel" )}</strong> <a href="tel:+34640029302" title={t('a11y.call')}>+34 640 029 302</a></li>
                <li><strong>{t("contacto.whatsappLabel")}</strong> <a href="https://api.whatsapp.com/send/?phone=34640029302" title={t('a11y.whatsapp')} target="_blank" rel="noreferrer" className="whatsapp">+34 640 029 302</a></li>
                <li><strong>Email:</strong> <a href="mailto:hola@enon.yoga">hola@enon.yoga</a></li>
            </ul>
            <h2 className="page-title--subtitle">{t( "contacto.subtitle-2" )}</h2>
            <p>{t( "contacto.p" )}</p>
        </main>
    )
}
