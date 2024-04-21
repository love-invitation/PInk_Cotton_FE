'use client';

import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';

const ConfirmModal = ({ isShow, clickAwayEnable = true, onReject }: ConfirmModalProps) => {
  return (
    <Modal
      isShow={isShow}
      clickAwayEnable={clickAwayEnable}
      onClose={onReject}
    >
      ConfirmModal
    </Modal>
  );
};

export default ConfirmModal;
