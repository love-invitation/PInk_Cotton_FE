'use client';

import Lottie from 'react-lottie-player';

import { Modal } from '../Modal';
import { AlertModalProps } from './AlertModal.type';
import AlertAnimationData from './Lottie_Alert_Animation.json';
import convertSubMessageColor from './utils/convertSubMessageColor';

import { twJoin } from 'tailwind-merge';

const AlertModal = ({
  isShow,
  message,
  subMessage,
  subMessageType = 'basic',
  onClose,
  clickAwayEnable = true,
  buttonTitle = '닫기',
}: AlertModalProps) => {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={clickAwayEnable}
    >
      <main className='flex w-[30rem] select-none flex-col items-center justify-center'>
        <Lottie
          animationData={AlertAnimationData}
          className='h-[22rem] w-[22rem]'
          play
          loop={false}
        />

        <p
          id='alert_message_container'
          className='px-2 text-center text-size16 font-medium'
          dangerouslySetInnerHTML={{ __html: message }}
        />

        {subMessage && (
          <p
            id='alert_sub_message_container'
            className={twJoin(
              'my-2 px-2 text-center text-size12 font-medium',
              convertSubMessageColor(subMessageType),
            )}
            dangerouslySetInnerHTML={{ __html: subMessage }}
          />
        )}

        <button
          type='button'
          className='my-[1rem] h-[4.8rem] w-[10rem] rounded-radius8 bg-gray_100 text-size10 font-bold text-white_100 transition-opacity hover:opacity-70'
          onClick={onClose}
        >
          {buttonTitle}
        </button>
      </main>
    </Modal>
  );
};

export default AlertModal;
