export default function Quiromasaje() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('no-found-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.add('chiromassage-page')

    return (
        <main className="page-content">
            <h2 className="page-title">Quiromasaje</h2>
        </main>
    )
}
