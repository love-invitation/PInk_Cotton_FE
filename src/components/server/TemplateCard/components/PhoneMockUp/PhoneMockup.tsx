import { PhoneMockupProps } from './PhoneMockup.type';
import { PhoneCameraIcon, PhoneSpeakerIcon } from './components';

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className='w-full h-full px-[0.2rem] relative'>
      <div className='w-[1rem] h-[8rem] bg-[#121515] absolute top-[18rem] right-0' />
      <div className='w-[1rem] h-[3rem] bg-[#121515] absolute top-[13rem] left-0' />
      <div className='w-[1rem] h-[5rem] bg-[#121515] absolute top-[17rem] left-0' />
      <div className='w-[1rem] h-[5rem] bg-[#121515] absolute top-[23rem] left-0' />
      <div className='w-full h-full border-[1.4rem] border-[#121515] rounded-radius40 relative flex justify-center overflow-hidden'>
        <div className='absolute w-[50%] h-[2.2rem] bg-[#121515] rounded-b-radius10 flex justify-center top-[-0.2rem]'>
          <PhoneSpeakerIcon className='relative top-[0.4rem]' />
          <PhoneCameraIcon className='absolute right-[4rem] top-[0.2rem]' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;
