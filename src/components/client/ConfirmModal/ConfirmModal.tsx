import { Modal } from '../Modal';
import { ConfirmModalProps } from './ConfirmModal.type';

const ConfirmModal = ({ isShow, clickAwayEnable = false }: ConfirmModalProps) => {
  return (
    <Modal
      isShow={isShow}
      clickAwayEnable={clickAwayEnable}
      onClose={() => {}}
    >
      ConfirmModal
    </Modal>
  );
};

export default ConfirmModal;
