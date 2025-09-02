import { useState } from "react";
import type { RegisterFormType } from "../model/types";
import { useRegister } from "../model/registerMutation";

export const RegisterForm = () => {};

export const RegisterPage = () => {
  const [user, setUser] = useState<RegisterFormType>({
    email: "",
    password: "",
  });

  const registerMutation = useRegister();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerMutation.mutateAsync(user);
      console.log(response);
      console.log("Success", user.email, user.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p>Register Page</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
