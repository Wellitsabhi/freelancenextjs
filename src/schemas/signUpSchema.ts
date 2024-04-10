import {z} from 'zod';

export const usernameValidadtion = z
.string()
.min(2,"Username must be atleast 2 characters long")
.max(20, "Username must be no more than 20 characters")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidadtion,
    email : z.string().email({message:"Invalid emil address"}),
    password: z.string().min(6,{message:"Password must be atleast 6 chaacters"})
})