import { useTranslation } from 'react-i18next'
// {t('rules.')}
export default function NormasTexto() {

    const { t } = useTranslation('global')

    return (
        <>
            <h3 className="page-title--subtitle">{t('rules.main-title')}</h3>

            <p>{t('rules.p-1')}</p>

            <h3 className="page-title--subtitle">{t('rules.title-2')}</h3>

            <p><strong>{t('rules.title-3')}</strong></p>

            <ul>
                <li>{t('rules.list-1.li-1')}</li>
                <li>{t('rules.list-1.li-2')}</li>
                <li>{t('rules.list-1.li-3')}</li>
                <li>{t('rules.list-1.li-4')}</li>
            </ul>

            <p><strong>{t('rules.title-4')}</strong></p>

            <ul>
                <li>{t('rules.list-2.li-1')}</li>
                <li>{t('rules.list-2.li-2')}</li>
                <li>{t('rules.list-2.li-3')}</li>
                <li>{t('rules.list-2.li-4')}</li>
            </ul>

            <p><strong>{t('rules.title-5')}</strong></p>

            <ul>
                <li>{t('rules.list-3.li-1')}</li>
                <li>{t('rules.list-3.li-2')}</li>
            </ul>

            <p><strong>{t('rules.title-6')}</strong></p>

            <ul>
                <li>{t('rules.list-4.li-1')}</li>
                <li>{t('rules.list-4.li-2')}</li>
                <li>{t('rules.list-4.li-3')}</li>
                <li>{t('rules.list-4.li-4')}</li>
                <li>{t('rules.list-4.li-5')}</li>
            </ul>

            <p><strong>{t('rules.title-7')}</strong></p>

            <ul>
                <li>{t('rules.list-5.li-1')}</li>
                <li>{t('rules.list-5.li-2')}</li>
                <li>{t('rules.list-5.li-3')}</li>
                <li>{t('rules.list-5.li-4')}</li>
                <li>{t('rules.list-5.li-5')}</li>
                <li>{t('rules.list-5.li-6')}</li>
                <li>{t('rules.list-5.li-7')}</li>
            </ul>

            <p><strong>{t('rules.title-8')}</strong></p>

            <ul>
                <li>{t('rules.list-6.li-1')}</li>
                <li>{t('rules.list-6.li-2')}</li>
                <li>{t('rules.list-6.li-3')}</li>
                <li>{t('rules.list-6.li-4')}</li>
            </ul>

            <p><strong>{t('rules.title-9')}</strong></p>

            <ul>
                <li>{t('rules.list-7.li-1')}</li>
                <li>{t('rules.list-7.li-2')}</li>
                <li>{t('rules.list-7.li-3')}</li>
            </ul>

            <p><strong>{t('rules.title-10')}</strong></p>

            <p>{t('rules.p-2')}</p>

            <p><strong>{t('rules.title-11')}</strong></p>

            <ul>
                <li>{t('rules.list-8.li-1')}</li>
                <li>{t('rules.list-8.li-2')}</li>
                <li>{t('rules.list-8.li-3')}</li>
                <li>{t('rules.list-8.li-4')}</li>
                <li>{t('rules.list-8.li-5')}</li>
                <li>{t('rules.list-8.li-6')}</li>
            </ul>

            <p><strong>{t('rules.title-12')}</strong></p>

            <ul>
                <li>{t('rules.list-9.li-1')}</li>
                <li>{t('rules.list-9.li-2')}</li>
                <li>{t('rules.list-9.li-3')}</li>
            </ul>

            <p><strong>{t('rules.title-13')}</strong></p>

            <ul>
                <li>{t('rules.list-10.li-1')}</li>
                <li>{t('rules.list-10.li-2')}</li>
                <li>{t('rules.list-10.li-3')}</li>
            </ul>

            <p>{t('rules.p-3')}</p>

            <p><strong>{t('rules.title-14')}</strong></p>

            <p>{t('rules.p-4')}</p>

            <p><strong>{t('rules.title-15')}</strong></p>

            <p>{t('rules.p-5')}</p>

            <p><strong>{t('rules.title-16')}</strong></p>

            <p>{t('rules.p-6')}</p>

            <ul>
                <li>{t('rules.list-11.li-1')}</li>
                <li>{t('rules.list-11.li-2')}</li>
            </ul>

            <p><strong>{t('rules.title-17')}</strong></p>

            <p>{t('rules.p-7')}</p>

            <p><strong>{t('rules.title-18')}</strong></p>

            <p>{t('rules.p-8')}</p>
        </>
    )
}
