'use client';

import { CloseIcon } from '@/components/server';

import { ModalProps } from './Modal.type';
import { ModalPortal } from './components';
import { useHandleCloseModal, useKeydownModal } from './hooks';

const Modal = ({ children, isShow, onClose, clickAwayEnable }: ModalProps) => {
  const handleCloseModal = useHandleCloseModal({ onClose });
  const handleKeydownModal = useKeydownModal({ onClose });

  return (
    <ModalPortal isShow={isShow}>
      <section
        onClick={(event) => clickAwayEnable && handleCloseModal(event)}
        onKeyDown={(event) => clickAwayEnable && handleKeydownModal(event)}
        tabIndex={-1}
        role='button'
        className='flex h-full w-full cursor-default items-center justify-center bg-transparent_90 absolute left-[0px] top-[0px] z-modal'
      >
        <article className='rounded-radius8 bg-white_100 p-2 shadow-shadow_700'>
          <header className='relative flex h-[2.4rem] w-full justify-end'>
            <button
              type='button'
              aria-label='modal_close_button'
              className='absolute right-[-4px]'
              onClick={onClose}
            >
              <CloseIcon
                size='2.4rem'
                className='transition-opacity hover:opacity-40'
              />
            </button>
          </header>
          {children}
        </article>
      </section>
    </ModalPortal>
  );
};

export default Modal;
