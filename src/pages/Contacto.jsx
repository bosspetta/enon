import { useTranslation } from 'react-i18next'

export default function Contacto() {
    const { t } = useTranslation('global')

    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.remove('external-page')
    document.body.classList.remove('mindfulness-page')
    document.body.classList.add('contact-page')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "contacto.title" )}</h2>
            <h3 className="page-title--subtitle">{t( "contacto.subtitle-1" )}</h3>
            <ul>
                <li><strong>{t( "contacto.tlfLabel" )}</strong> <a href="tel:+34640029302" title="Llamar a enON">+34 640 029 302</a></li>
                <li><strong>{t("contacto.whatsappLabel")}</strong> <a href="https://api.whatsapp.com/send/?phone=34640029302" title="WhatsApp a enON" target="_blank" rel="noreferrer" className="whatsapp">+34 640 029 302</a></li>
                <li><strong>Email:</strong> <a href="mailto:hola@enon.yoga">hola@enon.yoga</a></li>
            </ul>
            <h3 className="page-title--subtitle">{t( "contacto.subtitle-2" )}</h3>
            <p>{t( "contacto.p" )}</p>
        </main>
    )
}
