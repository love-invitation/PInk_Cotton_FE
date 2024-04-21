'use client';

import { useEffect } from 'react';
import Lottie from 'react-lottie-player';

import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';
import ConfirmAnimationData from './Lottie_Confirm_Animation.json';

const ConfirmModal = ({
  isShow,
  clickAwayEnable = true,
  message = '',
  warningMessage = '',
  onReject,
}: ConfirmModalProps) => {
  useEffect(() => {
    const messageElement = document.querySelector('#confirm_message_container');
    const warningElement = document.querySelector('#confirm_warning_message_container');

    if (messageElement) {
      messageElement.innerHTML = message;
    }

    if (warningElement && warningMessage) {
      warningElement.innerHTML = warningMessage;
    }
  }, [message, warningMessage, isShow]);

  return (
    <Modal
      isShow={isShow}
      clickAwayEnable={clickAwayEnable}
      onClose={onReject}
    >
      <main className='flex w-[30rem] flex-col items-center justify-center'>
        <Lottie
          animationData={ConfirmAnimationData}
          className='h-[22rem] w-[22rem]'
          play
          loop={false}
        />

        <p
          id='confirm_message_container'
          className='px-2 text-center text-size10 font-medium'
        />
        <p
          id='confirm_warning_message_container'
          className='px-2 text-center text-size4 font-medium text-red_500'
        />
      </main>
    </Modal>
  );
};

export default ConfirmModal;
