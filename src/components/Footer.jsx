import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const { t } = useTranslation('global')

    return (
        <footer>
            <p className="logo">en<strong>ON</strong></p>
            <p>{t('header.subtitle')}</p>
            <hr />
            <p>Calle San Luis 78 - 41003 Sevilla (España)</p>
            <p><a href="tel:+34640029302" title="Llamar a enON">+34 640 029 302</a></p>
            <p><a href="https://api.whatsapp.com/send/?phone=34640029302" title="WhatsApp a enON" target="_blank" rel="noreferrer" className="whatsapp">{t('whatsapp-link')}</a></p>
            <p><Link to="/">www.enon.yoga</Link></p>
            <p><a href="mailto:hola@enon.yoga">hola@enon.yoga</a></p>
        </footer>
    )
}
