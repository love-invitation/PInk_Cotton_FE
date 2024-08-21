import { SpinnerIcon } from '@/components/server';

const Loading = () => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <SpinnerIcon
        className='animate-spin'
        fill='#F98284'
        size='5rem'
      />
    </div>
  );
};

export default Loading;
