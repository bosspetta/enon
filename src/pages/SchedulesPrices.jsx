import { Link } from 'react-router'
import { usePagePath } from '../hooks'
import { useTranslation } from 'react-i18next'
import SchedulesTable from '../components/SchedulesTable'

export const handle = { bodyClass: 'schedules-page' }

export default function SchedulesPrices() {
    const { t } = useTranslation('global')
    const path = usePagePath()
    return (
        <main className="page-content">
            <h1 className="page-title">{t( "schedules.title" )}</h1>
            <h2 className="page-title--subtitle align-center">{t("schedules.schedules")}</h2>
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
                    18:30 - Mindfulness<br />
                    20:00 - Hatha Yoga</p>
                <p><strong>{t('schedules.friday')}: </strong><br />
                    18:00 - Taller Yoga Restaurativo</p>
            </div>
            <h2 className="page-title--subtitle align-center">{t("schedules.subtitle")}</h2>
            <ul className="prices">
                <li><span className="prices__label">{t("schedules.1class")}</span> <span className="prices__price">{t("schedules.1class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.2class")}</span> <span className="prices__price">{t("schedules.2class-price")}</span></li>
                <li><span className="prices__label">{t("schedules.3class")}</span> <span className="prices__price">{t("schedules.3class-price")}</span></li>

                <li><span className="prices__label">{t("schedules.taller-restaurativo")}</span> <span className="prices__price">{t("schedules.taller-restaurativo-price")}</span></li>
                <li><span className="prices__label">{t("schedules.mindfulnes")}</span> <span className="prices__price">{t("schedules.mindfulnes-price")}</span></li>

                <li><span className="prices__label">{t('schedules.clase-suelta')}</span> <span className="prices__price">15€</span></li>
            </ul>
            <hr />
            <p>{t('schedules.normas')} <Link to={path('normas')}>{t('schedules.normas-link')}</Link>.</p>
            <hr />
            <h2 className="page-title--subtitle">{t("schedules.masajes")}</h2>
            <ul>
                <li>{t( "schedules.p-quiro" )}, <strong>40€</strong></li>
                <li>{t( "schedules.p-relax" )}, <strong>43€</strong></li>
                <li>{t( "schedules.p-relax-90" )}, <strong>65€</strong></li>
                <li>{t( "schedules.p-facial" )}, <strong>45€</strong></li>
            </ul>
        </main>
    )
}
