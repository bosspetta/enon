export default function Contacto() {
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.add('contact-page')

    return (
        <main className="page-content">
            <h2 className="page-title">Contacto</h2>
        </main>
    )
}
