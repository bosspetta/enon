import { useEffect, useState } from 'react'

import { Login } from '../components/Login'

import appFirebase from '../credentials'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth(appFirebase)
const db = getFirestore(appFirebase)

const UsersList = () => {

    const [user, setUser] = useState(null)
    const [list, setList] = useState([])

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            setUser(firebaseUser)
        } else {
            setUser(null)
        }
    })

    useEffect(() => {
        const getList = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'usuarios'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setList(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [list])

    return (
        <>
            <main className="page-content">
                <h2 className="page-title">Alumnos enON</h2>
                {
                    user ?
                        <ol className="users-list">
                            {
                                list.map(item => (
                                    <li className="users-list__item" key={item.id}>
                                        <ul>
                                            <li><span className="users-list__item__user"><strong>Nombre completo:</strong> {item.name} {item.surnames}</span></li>
                                            <li><span className="users-list__item__user"><strong>Email:</strong> {item.email}</span></li>
                                            <li><span className="users-list__item__user"><strong>Newsletter:</strong> {item.newsletter ? 'Sí' : 'No'}</span></li>
                                        </ul>
                                    </li>
                                ))
                            }
                        </ol> :
                    <Login />
                }
            </main>
        </>
    )
}

export default UsersList
