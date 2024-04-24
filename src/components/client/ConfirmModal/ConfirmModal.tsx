'use client';

import Lottie from 'react-lottie-player';

import Button from '../Button/Button';
import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';
import ConfirmAnimationData from './Lottie_Confirm_Animation.json';

const ConfirmModal = ({
  isShow,
  clickAwayEnable = true,
  message,
  warningMessage,
  onReject,
  onAccept,
  acceptButtonTitle = '확인',
  rejectButtonTitle = '취소',
}: ConfirmModalProps) => {
  return (
    <Modal
      isShow={isShow}
      clickAwayEnable={clickAwayEnable}
      onClose={onReject}
    >
      <main className='flex w-[30rem] select-none flex-col items-center justify-center'>
        <Lottie
          animationData={ConfirmAnimationData}
          className='h-[22rem] w-[22rem]'
          play
          loop={false}
        />

        <p
          className='px-2 text-center text-size16 font-medium'
          dangerouslySetInnerHTML={{ __html: message }}
        />

        {warningMessage && (
          <p
            id='confirm_warning_message_container'
            className='text-red_500 my-2 px-2 text-center text-size12 font-medium'
            dangerouslySetInnerHTML={{ __html: warningMessage }}
          />
        )}

        <div className='flex w-full justify-center gap-4 pb-2'>
          <Button
            className='bg-pink_300 w-[11rem]'
            onClick={onAccept}
          >
            {acceptButtonTitle}
          </Button>

          <Button
            className='w-[11rem]'
            onClick={onReject}
            backgroundColor='gray'
          >
            {rejectButtonTitle}
          </Button>
        </div>
      </main>
    </Modal>
  );
};

export default ConfirmModal;
