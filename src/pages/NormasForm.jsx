import { useState } from 'react'

import { Form } from '../components/Form'
import { Login } from '../components/Login'

import appFirebase from '../credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(appFirebase)

export default function NormasForm() {

    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            setUser(firebaseUser)
        } else {
            setUser(null)
        }
    })

    return (
        <main className="page-content">
            { user ? <Form correoUsuario={user.email} /> : <Login /> }
        </main>
    )

}
