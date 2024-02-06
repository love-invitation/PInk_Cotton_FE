import NextAuth, { NextAuthOptions } from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions: NextAuthOptions = {
    providers: [
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_CLIENT_SECRET!,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account?.provider === 'naver') {
            }
            if (account?.provider === 'kakao') {
            }
            if (account?.provider === 'google') {
            }

            return { ...token };
        },
        session: async ({ session, token }) => {
            session.user = token;

            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
