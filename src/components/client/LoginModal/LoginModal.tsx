import { LoginContainer } from '@/components/server';

import { Modal } from '../Modal';
import { LoginModalProps } from './LoginModal.type';

const LoginModal = ({ isShow, onClose }: LoginModalProps) => {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      disabledCloseButton
      clickAwayEnable
    >
      <LoginContainer />
    </Modal>
  );
};

export default LoginModal;
