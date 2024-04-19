import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import appFirebase from '../credentials'
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, deleteDoc, setDoc } from 'firebase/firestore'

const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase)

export const Form = ({ correoUsuario }) => {

    const initialValue = {
        name: '',
        surnames: '',
        email: '',
        newsletter: true
    }

    const [formData, setFormData] = useState(initialValue)
    const [list, setList] = useState([])
    const [subId, setSubId] = useState('')

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

        if (subId === '') {
            try {
                await addDoc(collection(db, 'usuarios'), {
                    ...formData
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            await setDoc(doc(db, 'usuarios', subId), {
                ...formData
            })
        }
        setFormData({...initialValue})
        setSubId('')
    }

    useEffect(() => {
        const getList = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'usuarios'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id:doc.id})
                })
                setList(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [list])

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'usuarios', id))
    }

    const getOne = async (id) => {
        try {
            const docRef = doc(db, 'usuarios', id)
            const docSnap = await getDoc(docRef)
            setFormData(docSnap.data())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (subId !== '') {
            getOne(subId)
        }
    }, [subId])

    return (
        <>
            <h2 className="page-title">Aceptación de las normas</h2>
            <p className="current-user"><small>{correoUsuario}</small></p>
            <button onClick={
                () => signOut(auth)
            }>Cerrar sesión</button>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form__row">
                    <label htmlFor="name">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
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
                    />
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
                <button id="btn-submit">{ subId === '' ? 'Guardar' : 'Actualizar' }</button>
            </form>
            <ol className="users-list">
                {
                    list.map(item => (
                        <li className="users-list__item" key={item.id}>
                            <ul>
                                <li>Nombre completo: {item.name} {item.surnames}</li>
                                <li>Email: {item.email}</li>
                                <li>Newsletter: {item.newsletter ? 'Sí' : 'No'}</li>
                            </ul>
                            <div className="login-form__row login-form__row--selection">
                                <button onClick={ () => deleteUser(item.id) }>Eliminar usuario</button>
                                <button onClick={ () => setSubId(item.id) }>Actualizar usuario</button>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </>
    )
}

Form.propTypes = {
    correoUsuario: PropTypes.string.isRequired
}
