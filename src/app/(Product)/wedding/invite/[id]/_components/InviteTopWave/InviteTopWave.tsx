import { twJoin } from 'tailwind-merge';

const InviteTopWave = () => {
  const waveStyle =
    'w-[120rem] h-[120rem] bg-pink_500 absolute bottom-[96%] rounded-[40%] opacity-30';
  return (
    <>
      <div className={twJoin(waveStyle, 'animate-wave1')} />
      <div className={twJoin(waveStyle, 'animate-wave2 rotate-[25deg]')} />
      <div className={twJoin(waveStyle, 'animate-wave3 rotate-[50deg]')} />
    </>
  );
};

export default InviteTopWave;
