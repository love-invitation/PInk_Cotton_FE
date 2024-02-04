'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { IProps, IProviderConfig } from './type';

const config: Record<string, IProviderConfig> = {
    Naver: {
        bg: 'flex w-full items-center justify-center rounded-[5rem] bg-green-base py-[1.5rem]',
        text: 'text-[1.4rem] font-semibold text-white-base',
        src: '/Image/naver.png',
        alt: 'logo of naver',
    },
    Kakao: {
        bg: 'flex w-full items-center justify-center rounded-[5rem] bg-yellow-base py-[1.5rem]',
        text: 'text-[1.4rem] font-semibold text-text-base',
        src: '/Image/kakao.png',
        alt: 'logo of kakao',
    },
    Google: {
        bg: 'flex w-full items-center justify-center rounded-[5rem] bg-white-base py-[1.5rem]',
        text: 'text-[1.4rem] font-semibold text-text-base',
        src: '/Image/google.png',
        alt: 'logo of google',
    },
};

const SocialSigninButtonItem = ({ id, name, text }: IProps) => {
    return (
        <li className={config[name].bg}>
            <button
                onClick={() => signIn(id, { callbackUrl: '/' })}
                className="flex w-full items-center justify-center gap-[1rem]"
            >
                <Image
                    src={config[name].src}
                    alt={config[name].alt}
                    width={20}
                    height={20}
                />
                <span className={config[name].text}>{text}</span>
            </button>
        </li>
    );
};

export default SocialSigninButtonItem;
