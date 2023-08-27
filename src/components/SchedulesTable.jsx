import { useTranslation } from 'react-i18next'

export default function SchedulesTable() {
    const { t } = useTranslation('global')
    return (
        <table summary="Tabla de horarios de Yoga" id="schedules-table" className="schedules-table">
            <thead>
                <tr>
                    <th className="empty"><span className="sr-only">{t('schedules.weeknames')}</span></th>
                    <th id="schedules-tableColHdr2">{t("schedules.monday")}</th>
                    <th id="schedules-tableColHdr3">{t("schedules.tuesday")}</th>
                    <th id="schedules-tableColHdr4">{t("schedules.wednesday")}</th>
                    <th id="schedules-tableColHdr5">{t("schedules.thursday")}</th>
                    {/* <th id="schedules-tableColHdr6">{t("schedules.friday")}</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th id="schedules-tableRowHdr2">10:00</th>
                    <td headers="schedules-tableColHdr2 schedules-tableRowHdr2"></td>
                    <td headers="schedules-tableColHdr3 schedules-tableRowHdr2">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr4 schedules-tableRowHdr2"></td>
                    <td headers="schedules-tableColHdr5 schedules-tableRowHdr2">Hatha Yoga</td>
                    {/* <td headers="schedules-tableColHdr6 schedules-tableRowHdr2"></td> */}
                </tr>
                <tr>
                    <th id="schedules-tableRowHdr3">18:00</th>
                    <td headers="schedules-tableColHdr2 schedules-tableRowHdr3">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr3 schedules-tableRowHdr3">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr4 schedules-tableRowHdr3">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr5 schedules-tableRowHdr3">Hatha Yoga</td>
                    {/* <td headers="schedules-tableColHdr6 schedules-tableRowHdr3"></td> */}
                </tr>
                <tr>
                    <th id="schedules-tableRowHdr4">19:30</th>
                    <td headers="schedules-tableColHdr2 schedules-tableRowHdr4">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr3 schedules-tableRowHdr4"></td>
                    <td headers="schedules-tableColHdr4 schedules-tableRowHdr4">Hatha Yoga</td>
                    <td headers="schedules-tableColHdr5 schedules-tableRowHdr4"></td>
                    {/* <td headers="schedules-tableColHdr6 schedules-tableRowHdr4"></td> */}
                </tr>
                <tr>
                    <th id="schedules-tableRowHdr6">20:00</th>
                    <td headers="schedules-tableColHdr2 schedules-tableRowHdr5"></td>
                    <td headers="schedules-tableColHdr3 schedules-tableRowHdr5"></td>
                    <td headers="schedules-tableColHdr4 schedules-tableRowHdr5"></td>
                    <td headers="schedules-tableColHdr5 schedules-tableRowHdr5">{t("yoga-restaurativo")}</td>
                    {/* <td headers="schedules-tableColHdr6 schedules-tableRowHdr5"></td> */}
                </tr>
            </tbody>
        </table>
    )
}
