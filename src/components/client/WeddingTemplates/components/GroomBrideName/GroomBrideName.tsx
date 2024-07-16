import { GroomBrideNameProps } from './GroomBrideName.type';

const GroomBrideName = ({ width, groomName, brideName }: GroomBrideNameProps) => {
  return (
    <span
      className='w-full flex items-center justify-center tracking-widest px-[2rem]'
      style={{
        gap: `${width * 0.016}px`,
        fontSize: `${width * 0.0702}px`,
        lineHeight: `${width * 0.0742}px`,
      }}
    >
      <h2 className='break-all text-end w-[49%]'>{groomName}</h2>
      <p className='grow-1 flex justify-center w-[2%]'>·</p>
      <h2 className='break-all w-[49%]'>{brideName}</h2>
    </span>
  );
};

export default GroomBrideName;
