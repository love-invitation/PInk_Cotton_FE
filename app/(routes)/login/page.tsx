import { LOGIN } from '@/constants/message';
import { SITE_NAME } from '@/constants/text';
import Image from 'next/image';
import { getProviders } from 'next-auth/react';
import SocialSigninButtonList from './components/socialSigninButtonList';

const LoginPage = async () => {
    const providers = (await getProviders()) || {};

    return (
        <section className="flex h-screen  w-screen flex-col items-center justify-center gap-[2rem] rounded-[5rem] bg-white-base px-[10%] lg:px-[35%]">
            <h1 className="text-center text-[2.4rem] font-medium">{SITE_NAME} 로그인</h1>
            <p className="text-center text-[1.8rem] text-gray-base">
                {SITE_NAME}
                {LOGIN.DESCRIPTION}
            </p>
            <Image
                src="/Image/loginScreen.png"
                alt="loginScreen"
                width={256}
                height={180}
            />
            <SocialSigninButtonList providers={providers} />
        </section>
    );
};

export default LoginPage;
