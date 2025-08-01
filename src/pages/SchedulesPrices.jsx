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
    document.body.classList.remove('external-page')
    document.body.classList.remove('mindfulness-page')
    document.body.classList.add('schedules-page')

    const { t } = useTranslation('global')
    return (
        <main className="page-content">
            <h2 className="page-title">{t( "schedules.title" )}</h2>
            <h3 className="page-title--subtitle align-center">{t("schedules.schedules")}</h3>
            <SchedulesTable />
            <div className="schedules-mobile">
                <p><strong>{t('schedules.monday')}: </strong><br />
                    18:00 - Hatha Yoga<br />
                    19:30 - Hatha Yoga</p>
                <p><strong>{t('schedules.tuesday')}: </strong><br />
                    10:00 - Hatha Yoga<br />
                    20:00 - Hatha Yoga</p>
                <p><strong>{t('schedules.wednesday')}: </strong><br />
                    18:00 - Hatha Yoga<br />
                    19:30 - Hatha Yoga</p>
                <p><strong>{t('schedules.thursday')}: </strong><br />
                    10:00 - Hatha Yoga<br />
                    18:30 - Mindfulnes<br />
                    20:00 - Hatha Yoga</p>
                <p><strong>{t('schedules.friday')}: </strong><br />
                    18:00 - Taller Yoga Restaurativo</p>
            </div>
            <h3 className="page-title--subtitle align-center">{t("schedules.subtitle")}</h3>
            <ul className="prices">
                <li><span className="prices__label">{t("schedules.1class")}</span> <span className="prices__price">{t("schedules.1class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.2class")}</span> <span className="prices__price">{t("schedules.2class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.3class")}</span> <span className="prices__price">{t("schedules.3class-price")}</span></li>

                <li><span className="prices__label">{t("schedules.taller-restaurativo")}</span> <span className="prices__price">{t("schedules.taller-restaurativo-price")}</span></li>
                <li><span className="prices__label">{t("schedules.mindfulnes")}</span> <span className="prices__price">{t("schedules.mindfulnes-price")}</span></li>

                <li><span className="prices__label">{t('schedules.clase-suelta')}</span> <span className="prices__price">15€</span></li>
            </ul>
            <hr />
            <p>{t('schedules.normas')} <Link to="/normas">{t('schedules.normas-link')}</Link>.</p>
            <hr />
            <h3 className="page-title--subtitle">{t("schedules.masajes")}</h3>
            <ul>
                <li>{t( "schedules.p-quiro" )}, <strong>40€</strong></li>
                <li>{t( "schedules.p-relax" )}, <strong>43€</strong></li>
                <li>{t( "schedules.p-relax-90" )}, <strong>65€</strong></li>
                <li>{t( "schedules.p-facial" )}, <strong>45€</strong></li>
            </ul>
        </main>
    )
}
