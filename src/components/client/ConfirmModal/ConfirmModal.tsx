'use client';

import Lottie from 'react-lottie-player';

import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';
import ConfirmAnimationData from './Lottie_Confirm_Animation.json';

const ConfirmModal = ({ isShow, clickAwayEnable = true, onReject }: ConfirmModalProps) => {
  return (
    <Modal
      isShow={isShow}
      clickAwayEnable={clickAwayEnable}
      onClose={onReject}
    >
      <main className='flex w-[30rem] flex-col items-center justify-center'>
        <Lottie
          animationData={ConfirmAnimationData}
          className='h-[24rem] w-[24rem]'
          play
          loop={false}
        />
      </main>
    </Modal>
  );
};

export default ConfirmModal;
