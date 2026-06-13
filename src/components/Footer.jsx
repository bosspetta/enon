import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logoKayak from '../assest/img/kayak-logo.svg'

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

            <hr />

            <div className="adds">
                <p className="adds__kayak">
                    <a
                        href="https://www.kayak.es/Sevilla.10121.guide"
                        className="adds__kayak__link"
                        title="Buscar en Kayak"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Buscar actividades y alojamientos en Kayak para Sevilla"
                    >
                        <span className="adds__kayak__label">Descubre más cosas que hacer en Sevilla buscando en</span>
                        <img className="adds__kayak__logo" src={logoKayak} alt="Kayak" />
                    </a>
                </p>
            </div>
        </footer>
    )
}
