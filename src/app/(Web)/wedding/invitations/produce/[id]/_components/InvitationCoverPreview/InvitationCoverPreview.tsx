'use client';

import { Button } from '@/components/client';

const InvitationCoverPreview = () => {
  return (
    <>
      <Button
        radius='rounded'
        className='w-[8rem] h-[8rem] sticky bottom-[2rem] left-[2rem] hidden mobile:block'
      >
        미리보기
      </Button>
    </>
  );
};

export default InvitationCoverPreview;
