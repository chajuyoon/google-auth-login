import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ClientType = {
  clientId: string;
  clientSecret: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
};
