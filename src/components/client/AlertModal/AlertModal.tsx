'use client';

import { useEffect } from 'react';
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
  subMessageType = 'warning',
  onClose,
  clickAwayEnable = true,
}: AlertModalProps) => {
  useEffect(() => {
    const messageElement = document.querySelector('#alert_message_container');
    const subMessageElement = document.querySelector('#alert_sub_message_container');

    if (messageElement) {
      messageElement.innerHTML = message;
    }

    if (subMessageElement && subMessage) {
      subMessageElement.innerHTML = subMessage;
    }
  }, [message, subMessage, isShow]);

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
          className='px-2 text-center text-size10 font-medium'
        />

        {subMessage && (
          <p
            id='alert_sub_message_container'
            className={twJoin(
              'my-2 px-2 text-center text-size4 font-medium',
              convertSubMessageColor(subMessageType),
            )}
          />
        )}
      </main>
    </Modal>
  );
};

export default AlertModal;
