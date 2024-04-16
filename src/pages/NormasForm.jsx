import { useState } from 'react'

export default function NormasForm() {

    const [formData, setFormData] = useState(
        {
            name: '',
            surnames: '',
            email: '',
            newsletter: true
        }
    )

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <main className="page-content">
            <h2 className="page-title">Aceptación de las normas</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <br />
                <label htmlFor="surnames">Apellidos</label>
                <input
                    id="surnames"
                    type="text"
                    placeholder="Apellidos"
                    onChange={handleChange}
                    name="surnames"
                    value={formData.surnames}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <br />
                <input
                    type="checkbox"
                    id="newsletter-check"
                    onChange={handleChange}
                    name="newsletter"
                    checked={formData.newsletter}
                />
                <label htmlFor="newsletter-check">¿Quieres suscribirte al boletín enON?</label>
                <br />
                <button id="btn-submit">Enviar</button>
            </form>
        </main>
    )

}
