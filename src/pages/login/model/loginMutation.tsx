import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";

export function useLogin() {
  return useMutation({
    mutationFn: loginApi,
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log(data);
      console.log("Success");
    },
    onError: () => {
      console.log("Error");
    },
  });
}
