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
    return (
        <div className="enon-gallery">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={enon1} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={enon1} className="enon-gallery__img" />
                </a>

                <a href={enon2} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={enon2} className="enon-gallery__img" />
                </a>

                <a href={enon3} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={enon3} className="enon-gallery__img" />
                </a>

                <a href={enon4} title="Imagen de la zona de vestuarios en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de vestuarios en enON</span>
                    <img alt="Imagen de la zona de vestuarios en enON" src={enon4} className="enon-gallery__img" />
                </a>

                <a href={enon5} title="Imagen de la zona de vestuarios en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de vestuarios en enON</span>
                    <img alt="Imagen de la zona de vestuarios en enON" src={enon5} className="enon-gallery__img" />
                </a>

                <a href={enon6} title="Imagen de la zona de vestuarios en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de vestuarios en enON</span>
                    <img alt="Imagen de la zona de vestuarios en enON" src={enon6} className="enon-gallery__img" />
                </a>

                <a href={enon7} title="Imagen de la zona de vestuarios en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de vestuarios en enON</span>
                    <img alt="Imagen de la zona de vestuarios en enON" src={enon7} className="enon-gallery__img" />
                </a>

                <a href={enon8} title="Imagen de la zona de entrada en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de entrada en enON</span>
                    <img alt="Imagen de la zona de entrada en enON" src={enon8} className="enon-gallery__img" />
                </a>

                <a href={enon9} title="Imagen de la zona de entrada en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de entrada en enON</span>
                    <img alt="Imagen de la zona de entrada en enON" src={enon9} className="enon-gallery__img" />
                </a>

                <a href={enon10} title="Imagen de la zona de entrada en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la zona de entrada en enON</span>
                    <img alt="Imagen de la zona de entrada en enON" src={enon10} className="enon-gallery__img" />
                </a>

                <a href={enon11} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={enon11} className="enon-gallery__img" />
                </a>

                <a href={enon12} title="Imagen de la sala de Yoga en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala de Yoga en enON</span>
                    <img alt="Imagen de la sala de Yoga en enON" src={enon12} className="enon-gallery__img" />
                </a>

                <a href={enon13} title="Mesita con cuenco Tibetano, crótalos e incienso en enON" className="enon-gallery__item">
                    <span className="sr-only">Mesita con cuenco Tibetano, crótalos e incienso en enON</span>
                    <img alt="Mesita con cuenco Tibetano, crótalos e incienso en enON" src={enon13} className="enon-gallery__img" />
                </a>

                <a href={enon14} title="Mesita con una reproducción de una espina dorsal, usada para estudio y explicaciones en enON" className="enon-gallery__item">
                    <span className="sr-only">Mesita con una reproducción de una espina dorsal, usada para estudio y explicaciones en enON</span>
                    <img alt="Mesita con una reproducción de una espina dorsal, usada para estudio y explicaciones en enON" src={enon14} className="enon-gallery__img" />
                </a>

                <a href={enon15} title="Imagen de la sala preparada para masaje en enON" className="enon-gallery__item">
                    <span className="sr-only">Imagen de la sala preparada para masaje en enON</span>
                    <img alt="Imagen de la sala preparada para masaje en enON" src={enon15} className="enon-gallery__img" />
                </a>

                <a href={enon16} title="Aceites esenciales para quiromasaje y squitos térmicos de semillas" className="enon-gallery__item">
                    <span className="sr-only">Aceites esenciales para quiromasaje y squitos térmicos de semillas</span>
                    <img alt="Aceites esenciales para quiromasaje y squitos térmicos de semillas" src={enon16} className="enon-gallery__img" />
                </a>

                <a href={enon17} title="Vista exterior de la sala de Yoga enON en la Calle San Luis 78" className="enon-gallery__item">
                    <span className="sr-only">Vista exterior de la sala de Yoga enON en la Calle San Luis 78</span>
                    <img alt="Vista exterior de la sala de Yoga enON en la Calle San Luis 78" src={enon17} className="enon-gallery__img" />
                </a>
            </LightGallery>
        </div>
    )
}
