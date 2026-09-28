import { Outlet } from 'react-router'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import ChristmasPopup from './components/ChristmasPopup'

export default function Layout() {
    return (
        <>
            <div className="global-container">
                <div className="main-content">
                    <Header />
                    <MainMenu />
                    <Outlet />
                </div>
                <Footer />
            </div>
            <ChristmasPopup />
        </>
    )
}
