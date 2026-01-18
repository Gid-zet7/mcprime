import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from './db';
import User from '@/models/User';
// import bcrypt from 'bcrypt'; 

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                await connectDB();

                const user = await User.findOne({ email: credentials.email });

                if (!user) {
                    return null;
                }

                // In a real app, use bcrypt.compare
                // const isValid = await bcrypt.compare(credentials.password, user.passwordHash);

                // For demonstration/mvp without installing bcrypt types/package yet:
                const isValid = credentials.password === user.passwordHash;

                if (!isValid) {
                    return null;
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    role: user.role,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session?.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    }
};
