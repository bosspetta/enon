import { useTranslation } from 'react-i18next'
import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import gift1 from '../assest/img/gifts/01.webp'
import gift2 from '../assest/img/gifts/02.webp'
import gift3 from '../assest/img/gifts/03.webp'
import gift4 from '../assest/img/gifts/04.webp'

export default function GiftsGallery() {
    const { t } = useTranslation('global')

    return (
        <div className="enon-gallery enon-gallery--gifts">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={gift1} title={t('gallery.gift-facial')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.gift-facial')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.gift-facial')} src={gift1} className="enon-gallery__img" />
                </a>

                <a href={gift2} title={t('gallery.gift-relax')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.gift-relax')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.gift-relax')} src={gift2} className="enon-gallery__img" />
                </a>

                <a href={gift3} title={t('gallery.gift-quiro')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.gift-quiro')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.gift-quiro')} src={gift3} className="enon-gallery__img" />
                </a>

                <a href={gift4} title={t('gallery.gift-restaurativo')} className="enon-gallery__item">
                    <span className="sr-only">{t('gallery.gift-restaurativo')}</span>
                    <img loading="lazy" decoding="async" alt={t('gallery.gift-restaurativo')} src={gift4} className="enon-gallery__img" />
                </a>
            </LightGallery>
        </div>
    )
}
