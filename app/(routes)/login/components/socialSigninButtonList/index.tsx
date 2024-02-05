'use client';
import { IProps } from './type';
import SocialSigninButtonItem from '../socialSigninButtonItem';

const SocialSigninButtonList = ({ providers }: IProps) => {
    const buttonText: Record<string, string> = {
        Naver: '네이버 로그인',
        Kakao: '카카오 로그인',
        Google: '구글 로그인',
    };

    return (
        <ul className="flex w-full flex-col gap-[2rem]">
            {Object.values(providers).map((provider) => {
                const { id, name } = provider;

                return (
                    <SocialSigninButtonItem
                        key={id}
                        id={id}
                        name={name}
                        text={buttonText[name]}
                    />
                );
            })}
        </ul>
    );
};

export default SocialSigninButtonList;
