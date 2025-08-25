import { useMutation } from "@tanstack/react-query";
import { signUpApi } from "../../../entities/auth/api/auth";

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: signUpApi,
        mutationKey: ['signUp'],
        onSuccess: (data) => {
            // You can do things on success:
            // - Redirect the user
            // - Dispatch to a global state (e.g., set user in Redux)
            // - Show a success notification
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled: () => {
            console.log('onSettled')
        }
    })
}