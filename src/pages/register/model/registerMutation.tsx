import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/registerApi";

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
    mutationKey: ["register"],
    retry: false,
    onSuccess: () => {
      console.log("Success");
    },
    onError: () => {
      console.log("Error");
    },
  });
};
