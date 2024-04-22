'use client';

import { MouseEvent } from 'react';

import { UseHandleCloseModal } from './useHandleCloseModal.type';

const useHandleCloseModal = ({ onClose }: UseHandleCloseModal) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useHandleCloseModal;
