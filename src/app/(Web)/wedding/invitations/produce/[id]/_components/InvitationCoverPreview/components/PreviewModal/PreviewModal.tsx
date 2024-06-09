import { Modal } from '@/components/client/Modal';

import { PreviewModalProps } from './PreviewModal.type';

const PreviewModal = ({ isShow, onClose }: PreviewModalProps) => {
  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      clickAwayEnable
      disabledCloseButton
    >
      PreviewModal
    </Modal>
  );
};

export default PreviewModal;
