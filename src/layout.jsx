import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'

export default function Layout() {
    return (
        <div className="global-container">
            <div className="main-content">
                <Header />
                <MainMenu />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
