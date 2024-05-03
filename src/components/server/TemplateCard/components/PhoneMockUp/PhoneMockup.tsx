import { PhoneMockupProps } from './PhoneMockup.type';
import { PhoneCameraIcon, PhoneSpeakerIcon } from './components';

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className='w-full h-full px-[0.2rem] relative'>
      <div className='w-[1rem] h-[12%] bg-[#121515] absolute top-[27%] right-0' />
      <div className='w-[1rem] h-[5%] bg-[#121515] absolute top-[18.5%] left-0' />
      <div className='w-[1rem] h-[7%] bg-[#121515] absolute top-[25.5%] left-0' />
      <div className='w-[1rem] h-[7%] bg-[#121515] absolute top-[33.5%] left-0' />
      <div className='w-full h-full border-[1.4rem] border-[#121515] rounded-radius40 relative flex justify-center overflow-hidden'>
        <div className='absolute w-[50%] h-[3.6%] bg-[#121515] rounded-b-radius10 flex justify-center top-[0%]'>
          <PhoneSpeakerIcon className='relative top-[20%]' />
          <PhoneCameraIcon className='absolute right-[25%] top-[10%]' />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;
