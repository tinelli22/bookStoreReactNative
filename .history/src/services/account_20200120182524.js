
import { usersCollection } from '../config/consts'

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    
}