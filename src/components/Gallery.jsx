import { useTranslation } from 'react-i18next'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import enon1 from '../assest/img/enon/01.jpg'
import enon2 from '../assest/img/enon/02.jpg'
import enon3 from '../assest/img/enon/03.jpg'
import enon4 from '../assest/img/enon/04.jpg'
import enon5 from '../assest/img/enon/05.jpg'
import enon6 from '../assest/img/enon/06.jpg'
import enon7 from '../assest/img/enon/07.jpg'
import enon8 from '../assest/img/enon/08.jpg'
import enon9 from '../assest/img/enon/09.jpg'
import enon10 from '../assest/img/enon/10.jpg'
import enon11 from '../assest/img/enon/11.jpg'
import enon12 from '../assest/img/enon/12.jpg'
import enon13 from '../assest/img/enon/13.jpg'
import enon14 from '../assest/img/enon/14.jpg'
import enon15 from '../assest/img/enon/15.jpg'
import enon16 from '../assest/img/enon/16.jpg'
import enon17 from '../assest/img/enon/17.jpg'

export default function Gallery() {
    const { t } = useTranslation('global')

    return (
        <div className="enon-gallery">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={enon1} title={t('gallery.yoga-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.yoga-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.yoga-room')} src={enon1} className="enon-gallery__img" />
                </a>

                <a href={enon2} title={t('gallery.yoga-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.yoga-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.yoga-room')} src={enon2} className="enon-gallery__img" />
                </a>

                <a href={enon3} title={t('gallery.yoga-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.yoga-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.yoga-room')} src={enon3} className="enon-gallery__img" />
                </a>

                <a href={enon4} title={t('gallery.changing-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.changing-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.changing-room')} src={enon4} className="enon-gallery__img" />
                </a>

                <a href={enon5} title={t('gallery.changing-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.changing-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.changing-room')} src={enon5} className="enon-gallery__img" />
                </a>

                <a href={enon6} title={t('gallery.changing-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.changing-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.changing-room')} src={enon6} className="enon-gallery__img" />
                </a>

                <a href={enon7} title={t('gallery.changing-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.changing-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.changing-room')} src={enon7} className="enon-gallery__img" />
                </a>

                <a href={enon8} title={t('gallery.entrance')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.entrance')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.entrance')} src={enon8} className="enon-gallery__img" />
                </a>

                <a href={enon9} title={t('gallery.entrance')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.entrance')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.entrance')} src={enon9} className="enon-gallery__img" />
                </a>

                <a href={enon10} title={t('gallery.entrance')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.entrance')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.entrance')} src={enon10} className="enon-gallery__img" />
                </a>

                <a href={enon11} title={t('gallery.yoga-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.yoga-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.yoga-room')} src={enon11} className="enon-gallery__img" />
                </a>

                <a href={enon12} title={t('gallery.yoga-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.yoga-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.yoga-room')} src={enon12} className="enon-gallery__img" />
                </a>

                <a href={enon13} title={t('gallery.singing-bowl')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.singing-bowl')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.singing-bowl')} src={enon13} className="enon-gallery__img" />
                </a>

                <a href={enon14} title={t('gallery.spine')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.spine')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.spine')} src={enon14} className="enon-gallery__img" />
                </a>

                <a href={enon15} title={t('gallery.massage-room')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.massage-room')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.massage-room')} src={enon15} className="enon-gallery__img" />
                </a>

                <a href={enon16} title={t('gallery.oils')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.oils')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.oils')} src={enon16} className="enon-gallery__img" />
                </a>

                <a href={enon17} title={t('gallery.exterior')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.exterior')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.exterior')} src={enon17} className="enon-gallery__img" />
                </a>
            </LightGallery>
        </div>
    )
}
