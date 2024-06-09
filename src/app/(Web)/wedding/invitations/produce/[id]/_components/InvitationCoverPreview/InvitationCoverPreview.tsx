'use client';

import { Button } from '@/components/client';
import { useModal } from '@/hooks';

import { PreviewModal } from './components';

const InvitationCoverPreview = () => {
  const { isShowModal, closeModal, showModal } = useModal();
  return (
    <>
      <Button
        radius='rounded'
        className='w-[8rem] h-[8rem] sticky bottom-[2rem] left-[2rem] hidden mobile:block'
        onClick={showModal}
      >
        미리보기
      </Button>

      <PreviewModal
        isShow={isShowModal}
        onClose={closeModal}
      />
    </>
  );
};

export default InvitationCoverPreview;
