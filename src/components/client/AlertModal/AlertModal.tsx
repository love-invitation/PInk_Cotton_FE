'use client';

import Lottie from 'react-lottie-player';

import { Modal } from '../Modal';
import { AlertModalProps } from './AlertModal.type';
import AlertAnimationData from './Lottie_Alert_Animation.json';

const AlertModal = ({ isShow, onClose, clickAwayEnable = true }: AlertModalProps) => {
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
      </main>
    </Modal>
  );
};

export default AlertModal;
