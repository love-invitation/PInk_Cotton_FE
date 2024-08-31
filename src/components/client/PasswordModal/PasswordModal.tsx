import { Modal } from '../Modal';
import { PasswordModalProps } from './PasswordModal.type';

const PasswordModal = ({ isShow, onClose }: PasswordModalProps) => {
  return (
    <Modal
      isShow={isShow}
      clickAwayEnable
      onClose={onClose}
    >
      PasswordModal
    </Modal>
  );
};

export default PasswordModal;
