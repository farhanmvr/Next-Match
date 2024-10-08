import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().min(1, 'Email is required').email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
