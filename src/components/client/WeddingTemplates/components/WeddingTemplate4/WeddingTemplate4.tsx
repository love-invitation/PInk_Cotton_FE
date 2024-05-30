'use client';

import Image from 'next/image';

import { WeddingTemplateProps } from '../../WeddingTemplates.type';
import { useGetTemplateWidth } from '../../hooks';

const WeddingTemplate4 = ({ groomName, brideName, imageUrl, details }: WeddingTemplateProps) => {
  const { ref, width } = useGetTemplateWidth();

  return (
    <figure
      ref={ref}
      className='w-full h-full flex flex-col border-2 border-red-300 items-center justify-center'
      style={{
        gap: `${width * 0.0702}px`,
      }}
    >
      <h3
        style={{
          fontSize: `${width * 0.05}px`,
          letterSpacing: `${width * 0.008}px`,
        }}
      >
        WEDDING
      </h3>

      <div
        className='relative overflow-hidden '
        style={{
          width: `${width * 0.6667}px`,
          height: `${width * 0.9474}px`,
        }}
      >
        <Image
          src={imageUrl}
          className='rounded-t-[99rem] border-2 border-orange-400'
          fill
          objectFit='cover'
          alt='template - 1 Image'
        />
      </div>
      <figcaption
        className='flex flex-col items-center justify-center'
        style={{ gap: `${width * 0.02}px` }}
      >
        <span
          className='flex tracking-widest'
          style={{
            gap: `${width * 0.016}px`,
            fontSize: `${width * 0.0702}px`,
          }}
        >
          <h2>{groomName}</h2>
          <p>·</p>
          <h2>{brideName}</h2>
        </span>

        <p
          className='text-center whitespace-pre-line'
          style={{
            fontSize: `${width * 0.05}px`,
            whiteSpace: 'break-spaces',
          }}
        >
          {details}
        </p>
      </figcaption>
    </figure>
  );
};

export default WeddingTemplate4;
