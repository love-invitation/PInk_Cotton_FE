import type { Metadata } from 'next';
import AuthSession from '@/(Route)/authSession';
import ToastContainer from '@Component/Common/Toast';
import '@Style/global.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ko">
            <body>
                <ToastContainer />
                <AuthSession>
                    <main>{children}</main>
                </AuthSession>
            </body>
        </html>
    );
};

export default RootLayout;
