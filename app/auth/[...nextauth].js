import NextAuth from "next-auth/next";
import GoogleProvider from "next/auth/google-provider";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientIdSecret: process.env.GOOGLE_SECRET,
        }),
    ],

    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(authOptions);