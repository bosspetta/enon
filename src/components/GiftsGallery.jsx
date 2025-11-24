import LightGallery from 'lightgallery/react'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import gift1 from '../assest/img/gifts/01.png'
import gift2 from '../assest/img/gifts/02.png'
import gift3 from '../assest/img/gifts/03.png'
import gift4 from '../assest/img/gifts/04.png'

export default function GiftsGallery() {
    return (
        <div className="enon-gallery enon-gallery--gifts">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={gift1} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={gift1} className="enon-gallery__img" />
                </a>

                <a href={gift2} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={gift2} className="enon-gallery__img" />
                </a>

                <a href={gift3} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={gift3} className="enon-gallery__img" />
                </a>

                <a href={gift4} title="Imagen de la zona de vestuarios en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de vestuarios en enON</span>
                    <img alt="Imagen de la zona de vestuarios en enON" src={gift4} className="enon-gallery__img" />
                </a>
            </LightGallery>
        </div>
    )
}
