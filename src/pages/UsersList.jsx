import { useEffect, useState } from 'react'

import appFirebase from '../credentials'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const db = getFirestore(appFirebase)

const UsersList = () => {

    const [list, setList] = useState([])

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

    console.log(list)

    return (
        <>
            <main className="page-content">
                <h2 className="page-title">Alumnos enON</h2>
                <ol className="users-list">
                    {
                        list.map(item => (
                            <li className="users-list__item" key={item.id}>
                                <ul>
                                    <li>Nombre completo: {item.name} {item.surnames}</li>
                                    <li>Email: {item.email}</li>
                                    <li>Newsletter: {item.newsletter ? 'Sí' : 'No'}</li>
                                </ul>
                            </li>
                        ))
                    }
                </ol>
            </main>
        </>
    )
}

export default UsersList
