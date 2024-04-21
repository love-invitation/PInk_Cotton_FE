'use client';

import { Modal } from '../Modal';
import { AlertModalProps } from './AlertModal.type';

const AlertModal = ({ isShow, onClose, clickAwayEnable = true }: AlertModalProps) => {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable={clickAwayEnable}
    >
      AlertModal
    </Modal>
  );
};

export default AlertModal;
