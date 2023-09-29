import NormasTexto from '../components/NormasTexto'

export default function Normas() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.remove('schedules-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('external-page')
    document.body.classList.add('rules-page')
    return (
        <main className="page-content">
            <NormasTexto />
        </main>
    )
}
