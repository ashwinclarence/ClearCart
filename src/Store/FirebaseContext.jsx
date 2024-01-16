import {createContext, useEffect, useState} from 'react'
import { auth, userRef } from '../Firebase/config'
import { getDocs } from 'firebase/firestore'

export const AuthContext=createContext(null)


// eslint-disable-next-line react/prop-types
export default function Context({children}){
    const [CurrentUserID,setCurrentUserID]=useState(null) 
    useEffect(() => {
        try {
            getDocs(userRef).then((snapshot) => {
                const allusers = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }).filter((result) => {
                    return result.userId === auth.currentUser.uid
                })
                setCurrentUserID(allusers[0].id)
            })
        } catch (error) {
            console.log(error.message);
        }
    }, [])
    return(
        <AuthContext.Provider value={{CurrentUserID}}>
            {children}
        </AuthContext.Provider>
    )
}