import { useState } from 'react'

import appFirebase from '../credentials'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const db = getFirestore(appFirebase)

export const Form = () => {

    const initialValue = {
        name: '',
        surnames: '',
        email: '',
        newsletter: true,
        accept: false
    }

    const [formData, setFormData] = useState(initialValue)

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)

        try {
            await addDoc(collection(db, 'usuarios'), {
                ...formData
            })
        } catch (error) {
            console.log(error)
        }
        setFormData({...initialValue})
    }

    return (
        <>
            <h2 className="page-title">Aceptación de las normas</h2>
            <div className="enon-normas">
                <div className="enon-normas__inner">

                    <h3 className="page-title--subtitle">Where does it come from?</h3>

                    <p><small>Serán considerados alumnos inscritos aquellos que abonen la mensualidad regularmente. Serán considerados alumnos eventuales, todos aquellos quienes tomen clases sueltas. Todos los alumnos (inscritos y eventuales) deberán leer el siguiente reglamento de inicio y políticas de enON Estudio de Yoga. Adicionalmente, deberán firmar el consentimiento que se les entregará al momento de efectuar la inscripción. Las personas que no cumplan con las siguientes normas y obligaciones, no tendrán derecho a quejas o reclamaciones si se les negara o se les prohibiera el uso del estudio de yoga.</small></p>

                    <p><small>El alumno/a deberá comunicar claramente por palabra, vía WhatsApp o correo electrónico, su intención de darse de baja de las clases de Yoga. La baja deberá comunicarse antes del día 1 de cada mes. Si la baja se produce después del día 1, a mitad o finales de mes, por el motivo que sea, el alumno/a se compromete a pagar la mensualidad completa de ese mes. Aunque el alumno/a no haya asistido a ninguna clase ese mes, puesto que ha ocupado una plaza en la escuela, deberá abonar igualmente esa mensualidad.</small></p>

                    <p><small>Todos los datos personales proporcionados serán tratados únicamente con fines comerciales y se almacenarán siguiendo la normativa de protección de datos. Tratamos toda la información personal como confidencial. En ninguna circunstancia proporcionaremos información personal a terceros no autorizados y en todo momento protegeremos sus datos contra cualquier acceso no autorizado. El alumno debe aceptar recibir el boletín de noticias y ofertas especiales de enON Estudio de Yoga.</small></p>
                </div>
            </div>
            <form className="login-form login-form--accept" onSubmit={handleSubmit}>
                <div className="login-form__row">
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        required
                    />
                </div>
                <div className="login-form__row">
                    <label htmlFor="surnames">Apellidos</label>
                    <input
                        id="surnames"
                        type="text"
                        placeholder="Apellidos"
                        onChange={handleChange}
                        name="surnames"
                        value={formData.surnames}
                    />
                </div>
                <div className="login-form__row">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        required
                    />
                </div>
                <div className="login-form__row login-form__row--selection">
                    <input
                        type="checkbox"
                        id="accept-check"
                        onChange={handleChange}
                        name="accept"
                        checked={formData.accept}
                        required
                    />
                    <label htmlFor="accept-check">¿Acepta las normas sobre comportamiento y uso de las instalaciones que acaba de leer?</label>
                </div>
                <div className="login-form__row login-form__row--selection">
                    <input
                        type="checkbox"
                        id="newsletter-check"
                        onChange={handleChange}
                        name="newsletter"
                        checked={formData.newsletter}
                    />
                    <label htmlFor="newsletter-check">¿Quieres suscribirte al boletín enON?</label>
                </div>
                <button id="btn-submit">Guardar</button>
            </form>
        </>
    )
}

