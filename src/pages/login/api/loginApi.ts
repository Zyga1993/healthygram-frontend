// import axios from "axios"
import type { LoginFormType } from "../model/types"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../shared/config/firebase"

export const loginApi = async (loginForm: LoginFormType) => {
    const { email, password } = loginForm
    const request = await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    console.log(request.operationType, request.providerId, request.user)
    return request.user

}

