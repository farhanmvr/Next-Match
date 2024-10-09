import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { loginSchema } from './lib/schemas/loginSchema';
import { getUserbyEmail } from './app/actions/authActions';
import bcrypt from 'bcryptjs';

export default {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const validated = loginSchema.safeParse(credentials);
                if (validated.success) {
                    const { email, password } = validated.data;
                    const user = await getUserbyEmail(email);
                    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
                        return null;
                    }
                    return user;
                }
                return null;
            },
        }),
    ],
} satisfies NextAuthConfig;
