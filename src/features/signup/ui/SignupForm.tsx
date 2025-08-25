import React, { use } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { iSignupFormData } from "../../../entities/auth/model/types";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<iSignupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birthdate: "",
      yearsOfExperience: 0,
      // accountType is omitted - it's undefined by default
      notifications: false,
      terms: false,
    },
  });
    
    const watchAccountType = watch("accountType");

    const onSubmit: SubmitHandler<iSignupFormData> = async (data) => {
        try {

        } catch (error) {
            console.log(error);
        }
    }
    }
    
    
    
    
};
