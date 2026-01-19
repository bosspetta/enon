import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import icoGift from '../assest/img/ico-gift.svg'

export default function ChristmasPopup() {

    const { t } = useTranslation('global')

    const [chPopup, setChPopup] = useState('closed')

    const openChPopup = () => {
        setChPopup(prev => (prev === 'closed' ? 'opened' : 'closed'))
    }

    const closeChPopup = () => {
        setChPopup('closed')
    }

    return (
        <>

            <div className={`gif-carg-popup gif-carg-popup__${chPopup}`}>
                <div className="gif-carg-popup__inner">
                    <header className="gif-carg-popup__header">
                        <div className="gif-carg-popup__content">
                            <h3 className="page-title--subtitle"><span className="sr-only">{ t( "tarjeta-popup.title" ) }</span></h3>
                            <button type="button" onClick={() => openChPopup()} className="gif-carg-popup__btn">
                                <span className="gif-carg-popup__btn__label">{ t( "tarjeta-popup.open" ) }</span>
                                <img src={icoGift} alt="" className="gif-carg-popup__btn__ico" />
                            </button>
                        </div>
                    </header>
                    <div className="gif-carg-popup__content gif-carg-popup__data">
                        <div className="gif-carg-popup__data__inner">
                            <button type="button" onClick={() => closeChPopup()} className="gif-carg-popup__btn--close"><span className="sr-only">{t("tarjeta-popup.close")}</span></button>
                            <p>{ t( "tarjeta-popup.p1" ) }</p>
                            <p><Link to="/bono-regalo" className="gif-carg-popup__link" onClick={() => closeChPopup()}>{ t( "tarjeta-popup.p2" ) }</Link></p>
                            <p>{ t( "tarjeta-popup.p3" ) }</p>
                            <Link to="/bono-regalo" className="intro-links__link intro-links__link--alone" onClick={() => closeChPopup()}>{ t( "tarjeta-popup.btn" ) }</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
