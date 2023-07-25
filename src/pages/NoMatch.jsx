export default function NoMatch() {
    document.body.classList.remove('contact-page')
    document.body.classList.remove('home-page')
    document.body.classList.remove('enon-page')
    document.body.classList.remove('chiromassage-page')
    document.body.classList.remove('yoga-page')
    document.body.classList.remove('yoga-restaurativo-page')
    document.body.classList.add('no-found-page')

    return (
        <main className="page-content">
            <h2 className="page-title">No match!</h2>
        </main>
    )
}
