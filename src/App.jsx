import { Routes, Route } from 'react-router-dom'

import Layout from './layout'
import Home from './pages/Home'
import QueEsEnon from './pages/QueEsEnon'
import Yoga from './pages/Yoga'
import YogaRestaurativo from './pages/YogaRestaurativo'
import Quiromasaje from './pages/Quiromasaje'
import Contacto from './pages/Contacto'
import NoMatch from './pages/NoMatch'

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='que-es-enon' element={<QueEsEnon />} />
                    <Route path='yoga' element={<Yoga />} />
                    <Route path='yoga/restaurativo' element={<YogaRestaurativo />} />
                    <Route path='quiromasaje' element={<Quiromasaje />} />
                    <Route path='contacto' element={<Contacto />} />

                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    )
}
