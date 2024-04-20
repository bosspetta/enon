import appFirebase from '../credentials'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const correo = e.target.email.value
        const pass = e.target.pass.value

        await signInWithEmailAndPassword(auth, correo, pass)
    }

    return (
        <>
            <h2 className="page-title">Identifícate</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-form__row">
                    <label htmlFor="email" className="login-form__label">Dirección de email</label>
                    <input type="email" name="email" id="email" className="login-form__input" placeholder="Direcciónd e email" required />
                </div>
                <div className="login-form__row">
                    <label htmlFor="pass" className="login-form__label">Contraseña</label>
                    <input type="password" name="pass" id="pass" className="login-form__input" placeholder="Contraseña" required />
                </div>
                <div className="login-form__row login-form__row--btns">
                    <button>Iniciar sesión</button>
                </div>
            </form>
        </>
    )
}
