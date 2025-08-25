import axios from "axios";
import type { iSignupFormData, signUpResponse } from "../model/types";

export const signUpApi = async (data: iSignupFormData) => {
    try {
        const res = await axios.post<signUpResponse>("http://localhost:3000/api/v1/auth/signup", data);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}