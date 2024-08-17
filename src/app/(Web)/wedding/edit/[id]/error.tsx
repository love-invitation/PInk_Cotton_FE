'use client';

import { Button } from '@/components/client';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <div
      id='calc_header_footer_height'
      className='flex flex-col justify-center items-center gap-[5rem] px-[10%]'
    >
      <h2 className='text-[5rem]'>{error.toString()}</h2>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
};

export default Error;
