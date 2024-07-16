'use client';

import Image from 'next/image';

import { useGetElementWidth } from '@/hooks';

import { WeddingTemplateProps } from '../../WeddingTemplates.type';
import TemplateInfo from '../TemplateInfo/TemplateInfo';

const WeddingTemplate4 = ({ groomName, brideName, imageUrl, details }: WeddingTemplateProps) => {
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
          className='rounded-t-[99rem] object-cover'
          fill
          alt='template - 1 Image'
        />
      </div>

      <TemplateInfo
        width={width}
        brideName={brideName}
        groomName={groomName}
        details={details}
      />
    </figure>
  );
};

export default WeddingTemplate4;
