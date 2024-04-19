import { KeyboardEvent } from 'react';

import { UseKeydownModal } from './useKeydownModal.type';

const useKeydownModal = ({ onClose }: UseKeydownModal) => {
  const handleKeydownModal = ({ key }: KeyboardEvent) => {
    if (key !== 'Escape') {
      return;
    }

    onClose();
  };

  return handleKeydownModal;
};

export default useKeydownModal;
