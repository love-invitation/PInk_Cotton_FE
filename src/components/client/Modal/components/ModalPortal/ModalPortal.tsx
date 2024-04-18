'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalPortalProps } from './ModalPortal.type';

const ModalPortal = ({ children, isShow }: ModalPortalProps) => {
  const [ModalBaseElement, setModalBaseElement] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const findElement = document.querySelector('#modal');
    if (!(findElement instanceof HTMLElement)) {
      return;
    }

    setModalBaseElement(findElement);
  }, []);

  if (!isShow || !ModalBaseElement) {
    return;
  }

  return createPortal(<>{children}</>, ModalBaseElement);
};

export default ModalPortal;
