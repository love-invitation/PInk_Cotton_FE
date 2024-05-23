'use client';

import Image from 'next/image';

import { LOGIN_IMAGE } from '@/assets/images';

import { LoginButtons } from './_components';
import { useCloseAwayClick } from './_hooks';

import { AnimatePresence, motion } from 'framer-motion';

const LoginModal = () => {
  const { ref, isExit, handleBackRoute } = useCloseAwayClick();

  return (
    <AnimatePresence onExitComplete={handleBackRoute}>
      {!isExit && (
        <motion.section
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className='w-dvw h-dvh bg-transparent_90 fixed top-0 left-0 z-modal flex items-center justify-center'
        >
          <motion.article
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            ref={ref}
            className='w-full px-[2rem] pb-[2rem] max-w-[70rem] h-[70rem] bg-white_100 rounded-radius25 flex flex-col items-center justify-center gap-[4rem]'
          >
            <span className='flex flex-col items-center justify-center gap-[1.6rem]'>
              <h2 className='text-size26 font-medium'>로그인</h2>
              <p className='text-size18 font-medium break-keep text-gray_100'>
                PINK COTTON은 모바일청첩장을 가장 쉽고 빠르게 만들수 있는 공간이에요.
              </p>
            </span>

            <i className='max-w-[25.6rem] h-[18rem]'>
              <Image
                src={LOGIN_IMAGE}
                sizes='100%'
                alt='login_image'
              />
            </i>

            <LoginButtons />
          </motion.article>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
