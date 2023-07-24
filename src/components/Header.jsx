import { Link } from 'react-router-dom'

import ColoSchemeSwitcher from './ColoSchemeSwitcher'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

import logo from '../assest/img/logo-enon.svg'

export default function Header() {

    const { t, i18n } = useTranslation('global')

    const openMenu = (e) => {
        e.preventDefault()
        const btnMenu = document.getElementById('btn-menu')
        const mainMenu = document.getElementById('main-menu')
        document.body.classList.toggle('menu-opened')
        mainMenu.classList.toggle('menu-opened')
        btnMenu.classList.toggle('is-active')
    }

    const spanishLang = (e) => {
        let spanishBtn = document.querySelector('.language__btn--es')
        let englishBtn = document.querySelector('.language__btn--en')
        spanishBtn.classList.remove('selected')
        englishBtn.classList.remove('selected')
        e.target.classList.add('selected')
        document.documentElement.setAttribute('lang', 'es')
        localStorage.setItem('language', 'es')
        return i18n.changeLanguage('es')
    }

    const englishLang = (e) => {
        let englishBtn = document.querySelector('.language__btn--en')
        let spanishBtn = document.querySelector('.language__btn--es')
        englishBtn.classList.remove('selected')
        spanishBtn.classList.remove('selected')
        e.target.classList.add('selected')
        document.documentElement.setAttribute('lang', 'en')
        localStorage.setItem('language', 'en')
        return i18n.changeLanguage('en')
    }

    let selectedLanguage = i18next.language

    return (
        <header>
            <button className="hamburger hamburger--collapse" type="button" id="btn-menu" onClick={openMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    <span className="sr-only">{t( "header.open-menu" )}</span>
                </span>
            </button>
            <div className="top-options">
                <button id="contrast-btn" type="button"><ColoSchemeSwitcher /></button>
                <div id="language" className="language">
                    <button className={`language__btn language__btn--es ${ selectedLanguage === 'es' ? 'selected' : null }`} onClick={spanishLang} type="button">Español</button>
                    <button className={`language__btn language__btn--en ${ selectedLanguage === 'en' ? 'selected' : null }`} onClick={englishLang} type="button">English</button>
                </div>
            </div>
            <h1 className="site-title">
                <Link to="/" title="Ir al inicio">
                    <span className="site-title__logo">
                        <img src={logo} alt="Logotipo enON" />
                    </span>
                    <span className="site-title__title"><span className="sr-only">enON</span></span>
                    <span className="site-title__subtitle">{t( "header.subtitle" )}</span>
                    <span className="site-title__yoga-teacher"><strong>Isabel</strong> Martínez San Esteban</span>
                </Link>
            </h1>
        </header>
    )
}
