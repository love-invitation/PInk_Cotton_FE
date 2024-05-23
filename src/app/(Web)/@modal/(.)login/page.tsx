'use client';

import { LoginContainer } from '@/components/server';

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
          <motion.div
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
          >
            <LoginContainer />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
