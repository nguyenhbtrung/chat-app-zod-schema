import { z } from 'zod';

export const registerSchema = z.object({
    userName: z.string().min(1, { message: 'Username is required' }),
    email: z.email({ message: 'Email format is invalid' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' })
});

export const loginSchema = z.object({
    userName: z.string().min(1, { message: 'Username is required' }),
    password: z.string().min(1, { message: 'Password is required' })
});

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1, { message: "Current password is required" }),
    newPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});