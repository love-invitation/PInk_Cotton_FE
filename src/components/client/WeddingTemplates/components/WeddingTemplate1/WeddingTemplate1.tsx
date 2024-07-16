'use client';

import Image from 'next/image';

import { useGetElementWidth } from '@/hooks';

import { WeddingTemplateProps } from '../../WeddingTemplates.type';
import GroomBrideName from '../GroomBrideName/GroomBrideName';

const WeddingTemplate1 = ({ details, groomName, brideName, imageUrl }: WeddingTemplateProps) => {
  const { ref, width } = useGetElementWidth();

  return (
    <figure
      ref={ref}
      className='w-full h-full flex flex-col items-center justify-center'
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
        우리결혼합니다
      </h3>

      <div
        className='relative'
        style={{
          width: `${width * 0.614}px`,
          height: `${width * 0.614}px`,
        }}
      >
        <Image
          src={imageUrl}
          className='object-top object-cover'
          fill
          alt='template - 1 Image'
        />
      </div>
      <figcaption
        className='w-full flex flex-col items-center justify-center'
        style={{ gap: `${width * 0.02}px` }}
      >
        <GroomBrideName
          width={width}
          brideName={brideName}
          groomName={groomName}
        />

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

export default WeddingTemplate1;
