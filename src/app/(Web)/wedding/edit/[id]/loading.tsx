import { SpinnerIcon } from '@/components/server';

const Loading = () => {
  return (
    <div
      id='calc_header_footer_height'
      className=' flex justify-center items-center'
    >
      <SpinnerIcon
        className='animate-spin'
        fill='#F98284'
        size='5rem'
      />
    </div>
  );
};

export default Loading;
