'use client';

import { createPortal } from 'react-dom';

import { ModalPortalProps } from './ModalPortal.type';

const ModalPortal = ({ children, isShow }: ModalPortalProps) => {
  if (!isShow) {
    return;
  }

  const ModalBaseElement = document.querySelector('#modal');
  if (!(ModalBaseElement instanceof HTMLElement)) {
    return;
  }

  return createPortal(<>{children}</>, ModalBaseElement);
};

export default ModalPortal;
