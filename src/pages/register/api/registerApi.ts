import type { RegisterFormType } from "../model/types"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../shared/config/firebase"

export const registerApi = async (formData: RegisterFormType) => {
    const { email, password } = formData
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user.operationType, user.user, user.providerId)
        return user.user

    } catch (error) {
        console.log(error);

    }
}