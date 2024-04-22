'use client';

import Lottie from 'react-lottie-player';

import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';
import ConfirmAnimationData from './Lottie_Confirm_Animation.json';

import { twJoin } from 'tailwind-merge';

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
  // TODO - 임시 버튼 디자인. 추후 공용 Button Component 추가시 대체하기
  const buttonStyle = `w-[10rem] h-[4.8rem] rounded-radius2 my-[1rem] text-white_100 text-size10 font-bold hover:opacity-70 transition-opacity`;

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
          className='px-2 text-center text-size10 font-medium'
          dangerouslySetInnerHTML={{ __html: message }}
        />

        {warningMessage && (
          <p
            id='confirm_warning_message_container'
            className='text-red_500 my-2 px-2 text-center text-size4 font-medium'
            className='text-red_500 my-2 px-2 text-center text-size4 font-medium'
            dangerouslySetInnerHTML={{ __html: warningMessage }}
          />
        )}

        <div className='flex w-full justify-center gap-4'>
          <button
            type='button'
            className={twJoin(buttonStyle, 'bg-pink_300')}
            onClick={onAccept}
          >
            {acceptButtonTitle}
          </button>

          <button
            type='button'
            className={twJoin(buttonStyle, 'bg-gray_100')}
            onClick={onReject}
          >
            {rejectButtonTitle}
          </button>
        </div>
      </main>
    </Modal>
  );
};

export default ConfirmModal;
