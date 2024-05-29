'use client';

import Image from 'next/image';

import { useGetTemplateWidth } from '../../hooks';

export interface TemplateProps {
  detail: string;
  groomName: string;
  brideName: string;
}

const Template1 = ({ detail, groomName, brideName }: TemplateProps) => {
  const { ref, width } = useGetTemplateWidth();

  return (
    <figure
      ref={ref}
      className='w-full h-full border-2 border-red-500 flex flex-col items-center justify-center'
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
      {/* 이미지 */}

      <Image
        src='https://invitation-bucket.s3.ap-northeast-2.'
        className='border-2 border-orange-400'
        width={width * 0.614}
        height={width * 0.614}
        alt='template - 1 Image'
      />
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
          className='text-center'
          style={{
            fontSize: `${width * 0.05}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: detail,
          }}
        />
      </figcaption>
    </figure>
  );
};

export default Template1;
