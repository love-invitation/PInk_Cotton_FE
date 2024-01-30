import { LOGIN } from '@Constant/message';
import { SITE_NAME } from '@Constant/text';
import Image from 'next/image';

const Login = () => {
    return (
        <article className="flex h-[69rem]  w-[70rem] flex-col items-center justify-center gap-[2rem] rounded-[5rem] bg-white-base px-[8.1rem]">
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
            <ul className="flex w-full flex-col gap-[2rem]">
                <li className="flex w-full items-center justify-center rounded-[5rem] bg-green-base py-[1.5rem]">
                    <button className="flex w-full items-center justify-center gap-[1rem]">
                        <Image
                            src="/Image/naver.png"
                            alt="naverLogo"
                            width={20}
                            height={20}
                        />
                        <span className="text-[1.4rem] font-semibold text-white-base">
                            네이버 로그인
                        </span>
                    </button>
                </li>
                <li className="flex w-full items-center justify-center rounded-[5rem] bg-yellow-base py-[1.5rem]">
                    <button className="flex w-full items-center justify-center gap-[1rem]">
                        <Image
                            src="/Image/kakao.png"
                            alt="kakaoLogo"
                            width={20}
                            height={20}
                        />
                        <span className="text-[1.4rem] font-semibold">카카오 로그인</span>
                    </button>
                </li>
                <li className="flex w-full items-center justify-center rounded-[5rem] bg-white-base py-[1.5rem]">
                    <button className="flex w-full items-center justify-center gap-[1rem]">
                        <Image
                            src="/Image/google.png"
                            alt="googleLogo"
                            width={20}
                            height={20}
                        />
                        <span className="text-[1.4rem] font-semibold">구글 로그인</span>
                    </button>
                </li>
            </ul>
        </article>
    );
};

export default Login;
