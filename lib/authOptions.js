// app/libs/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";

const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt",
         maxAge: 1 * 24 * 60 * 60,
    },

    pages: {
        signIn: "/login",
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "user@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.warn("Missing email or password.");
                    return null;
                }

                try {
                    const user = await db.user.findUnique({
                        where: { email: credentials.email },
                        include: { role: true },
                    });

                    if (!user || !user.hashedPassword) {
                        console.warn("User not found or password not set.");
                        return null;
                    }

                    const isValid = await compare(credentials.password, user.hashedPassword);
                    if (!isValid) {
                        console.warn("Invalid password.");
                        return null;
                    }

                    // Only return minimal user data
                    return {
                        //id: user.id,
                        name: user.name,
                        role: user.role.name,
                        image: user.imageUrl,
                    };
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.role = token.role;
            }
            return session;
        },
    },
};

export { authOptions };
