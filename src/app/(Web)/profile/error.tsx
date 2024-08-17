'use client';

import { Button } from '@/components/client';

const Error = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-[5rem] py-[9.9rem]'>
      <h2 className='text-[5rem]'>{error.toString()}</h2>
      <Button onClick={() => resetErrorBoundary()}>다시 시도</Button>
    </div>
  );
};

export default Error;
