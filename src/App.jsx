import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import QueEsEnon from './pages/QueEsEnon'
import Yoga from './pages/Yoga'
import Quiromasaje from './pages/Quiromasaje'
import Contacto from './pages/Contacto'

export default function App() {
    return (
        <>
            <div className="global-container">
                <div className="main-content">
                    <BrowserRouter>
                        <Header />
                        <MainMenu />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/que-es-enon' element={<QueEsEnon />} />
                            <Route path='/yoga' element={<Yoga />} />
                            <Route path='/quiromasaje' element={<Quiromasaje />} />
                            <Route path='/contacto' element={<Contacto />} />
                        </Routes>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
        </>
    )
}
