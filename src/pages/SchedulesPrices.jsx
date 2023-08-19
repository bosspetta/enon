import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SchedulesTable from '../components/SchedulesTable'

export default function SchedulesPrices() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('rules-page')
    document.body.classList.add('schedules-page')

    const { t } = useTranslation('global')
    return (
        <main className="page-content">
            <h2 className="page-title">{t( "schedules.title" )}</h2>
            <h3 className="page-title--subtitle align-center">{t("schedules.schedules")}</h3>
            <SchedulesTable />
            <p className="align-center">* <strong><small>Las clases son de 1 hora y 15 minutos.</small></strong></p>
            <div className="schedules-mobile">
                <p><strong>{t('schedules.monday')}: </strong><br />
                    17:30 / 18:45 - Hatha Yoga<br />
                    19:00 / 20:15 - Hatha Yoga</p>
                <p><strong>{t('schedules.tuesday')}: </strong><br />
                    10:00 / 11:15 - Hatha Yoga<br />
                    18:00 / 19:15 - {t("yoga-restaurativo")}<br />
                    20:00 / 21:15 - Hatha Yoga</p>
                <p><strong>{t('schedules.wednesday')}: </strong><br />
                    17:30 / 18:45 - Hatha Yoga<br />
                    19:00 / 20:15 - Hatha Yoga</p>
                <p><strong>{t('schedules.thursday')}: </strong><br />
                    10:00 / 11:15 - Hatha Yoga<br />
                    18:00 / 19:15 - {t("yoga-restaurativo")}<br />
                    20:00 / 21:15 - Hatha Yoga</p>
            </div>
            <h3 className="page-title--subtitle align-center">{t("schedules.subtitle")}</h3>
            <ul className="prices">
                <li><span className="prices__label">{t("schedules.1class")}</span> <span className="prices__price">{t("schedules.1class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.2class")}</span> <span className="prices__price">{t("schedules.2class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.3class")}</span> <span className="prices__price">{t("schedules.3class-price")}</span></li>
            </ul>
            <hr />
            <p>No se requiere matricula, pero sí el compromiso con las <Link to="/normas">normas del establecimiento</Link>.</p>
        </main>
    )
}
