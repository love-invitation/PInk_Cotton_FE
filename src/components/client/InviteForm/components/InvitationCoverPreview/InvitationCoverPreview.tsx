'use client';

import { Button } from '@/components/client';
import { ImageIcon } from '@/components/server';
import { useModal } from '@/hooks';

import { PreviewModal } from './_components';

const InvitationCoverPreview = () => {
  const { isShowModal, closeModal, showModal } = useModal();
  return (
    <>
      <Button
        radius='rounded'
        className='w-[6rem] h-[6rem] items-center justify-center sticky bottom-[2rem] left-[2rem] hidden mobile:flex'
        onClick={showModal}
      >
        <ImageIcon
          size='3.6rem'
          fill='white'
        />
      </Button>

      <PreviewModal
        isShow={isShowModal}
        onClose={closeModal}
      />
    </>
  );
};

export default InvitationCoverPreview;
