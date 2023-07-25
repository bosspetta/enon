import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <p className="logo">en<strong>ON</strong></p>
            <p>Estudio de Yoga y Quiromasaje</p>
            <hr />
            <p>Calle San Luis 78 - 41003 Sevilla (España)</p>
            <p>+34 640 029 302</p>
            <p><Link to="/">www.enon.yoga</Link></p>
            <p><a href="mailto:hola@enon.yoga">hola@enon.yoga</a></p>
        </footer>
    )
}
