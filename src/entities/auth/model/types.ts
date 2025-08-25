export interface iSignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string,
    birthdate: string,
    yearsOfExperience: number,
    accountType?: 'Personal' | 'Business' | 'Enterprise',
    notifications: boolean,
    terms: boolean
}

export interface signUpResponse {
    [key:string] : unknown
}