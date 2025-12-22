import { useTranslation } from 'react-i18next'

import GiftsGallery from '../components/GiftsGallery'

import video from '../assest/video/bono-regalo-enon-min.mp4'
import videoWebm from '../assest/video/bono-regalo-enon-min.mp4'
import poster from '../assest/img/poster.png'

export default function BonoRegalo() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('rules-page')
    document.body.classList.remove('external-page')
    document.body.classList.remove('mindfulness-page')
    document.body.classList.add('enon-page')
    document.body.classList.add('bono-regalo')

    const { t } = useTranslation('global')

    return (
        <main className="page-content">
            <h2 className="page-title">{t( "br.title" )}</h2>

            <p>{t( "br.p-1" )}</p>
            <p>{t( "br.p-2" )}</p>
            <p><em>{t( "br.p-3" )}</em></p>

            <div className="video">
                <div className="video__wrapper">
                    <video controls poster={poster}>
                        <source src={video} type="video/mp4" />
                        <source src={videoWebm} type="video/webm" />
                        <p>{t( "br.no-video" )}</p>
                    </video>
                </div>
            </div>

            <h3 className="page-title page-title--subtitle">{t( "br.title-ideas" )}</h3>
            <GiftsGallery />

            <h3 className="page-title page-title--subtitle">{t( "br.precios" )}</h3>
            <div className="precios">
                <ul>
                    <li>
                        <p><strong>{t( "br.p-1-title" )}</strong></p>
                        <p>{t( "br.p-1-desc" )}<br />
                        <strong>40 €</strong></p>
                    </li>
                    <li>
                        <p><strong>{t( "br.p-2-title" )}</strong></p>
                        <p>{t( "br.p-2-desc" )}<br />
                        <strong>43 €</strong></p>
                    </li>
                    <li>
                        <p><strong>{t( "br.p-3-title" )}</strong></p>
                        <p>{t( "br.p-3-desc" )}<br />
                        <strong>65 €</strong></p>
                    </li>
                    <li>
                        <p><strong>{t( "br.p-4-title" )}</strong></p>
                        <p>{t( "br.p-4-desc" )}<br />
                        <strong>45 €</strong></p>
                    </li>
                    <li>
                        <p><strong>{t( "br.p-5-title" )}</strong></p>
                        <p>{t( "br.p-5-desc" )}<br />
                        <strong>25 €</strong></p>
                    </li>
                </ul>
            </div>
        </main>
    )
}
