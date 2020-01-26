import { authref, firestoreRef, provider } from "../config/firebaseConfig"
import { load } from "./users"
import { LOAD_USER } from "../store/consts"
import { messageWarning } from "../components/ToastMessage"
import { loadUser } from "../store/actions/user"


export function addUser(user) {
    return firestoreRef.add(user)
}

export function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}

export function loginWithEmailAndPassword(email, password) {
    return authref.signInWithEmailAndPassword(email, password)
}

export function isUserLogged(navigate) { 
        authref.onAuthStateChanged(user => {
            console.log('aqui/;')
            if(user) {
                load(user.uid).then(({ docs }) => {
                    docs.forEach(d => loadUser(d.data()))
                    navigate('Private')
                }).catch(err => console.error(err))
            }
        })
}