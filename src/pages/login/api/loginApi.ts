import axios from "axios"
import type { LoginFormType } from "../model/types"

export const loginApi = async (loginForm: LoginFormType) => {
    const request = await axios.post('http://localhost:3000/login', loginForm)
    console.log(request)
}