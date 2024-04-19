import { useState } from 'react'

import appFirebase from '../credentials'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Login = () => {

    const [register, setRegister] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const correo = e.target.email.value
        const pass = e.target.pass.value

        if (register) {
            await createUserWithEmailAndPassword(auth, correo, pass)
        } else {
            await signInWithEmailAndPassword(auth, correo, pass)
        }
    }

    const changeRegister = () => {
        setRegister(!register)
    }

    return (
        <>
            <h2 className="page-title">{ register ? 'Identifícate' : 'Regístrate' }</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form__row">
                    <label htmlFor="email" className="login-form__label">Dirección de email</label>
                    <input type="email" name="email" id="email" className="login-form__input" required />
                </div>
                <div className="login-form__row">
                    <label htmlFor="pass" className="login-form__label">Contraseña</label>
                    <input type="password" name="pass" id="pass" className="login-form__input" required />
                </div>
                <div className="login-form__row login-form__row--btns">
                    <button>
                        {register ? 'Regístrate' : 'Inicia sesión'}
                    </button>
                </div>
            </form>
            <button onClick={changeRegister}>
                { register ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate' }
            </button>
        </>
    )
}
