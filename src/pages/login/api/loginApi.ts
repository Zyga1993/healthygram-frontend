// import axios from "axios"
import type { LoginFormType } from "../model/types"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const loginApi = async (loginForm: LoginFormType) => {
    const auth = getAuth()
    const { email, password } = loginForm
    const request = await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    console.log(request.operationType, request.providerId, request.user)
    return request.user

}

