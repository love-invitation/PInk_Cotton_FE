import { TemplateInfoProps } from './TemplateInfo.type';

const TemplateInfo = ({ width, brideName, groomName, details }: TemplateInfoProps) => {
  return (
    <figcaption
      className='w-full flex flex-col items-center justify-center'
      style={{ gap: `${width * 0.02}px` }}
    >
      <span
        className='w-full flex items-center justify-center tracking-widest px-[2rem]'
        style={{
          gap: `${width * 0.016}px`,
          fontSize: `${width * 0.0702}px`,
          lineHeight: `${width * 0.0742}px`,
        }}
      >
        <h2 className='break-all w-[49%] flex justify-end text-center'>{groomName}</h2>
        <p className='grow-1 flex justify-center w-[2%]'>·</p>
        <h2 className='break-all w-[49%]'>{brideName}</h2>
      </span>

      <p
        className='w-full text-center whitespace-pre-line px-[2rem] break-all'
        style={{
          fontSize: `${width * 0.05}px`,
          whiteSpace: 'break-spaces',
        }}
      >
        {details}
      </p>
    </figcaption>
  );
};

export default TemplateInfo;
