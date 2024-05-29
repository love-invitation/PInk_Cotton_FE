'use client';

import { useEffect, useRef, useState } from 'react';

const Template1 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const layoutElement = ref.current;

    if (!layoutElement) {
      return;
    }

    setWidth(layoutElement.getBoundingClientRect().width);
  }, []);

  // console.log(width * 0.008);

  return (
    <figure
      ref={ref}
      className='w-full h-full border-2 border-red-500 flex flex-col items-center justify-center'
      style={{
        gap: `${width * 0.06}px`,
      }}
    >
      <h3
        style={{
          fontSize: `${width * 0.066}px`,
          letterSpacing: `${width * 0.008}px`,
        }}
      >
        우리결혼합니다
      </h3>
      {/* 이미지 */}
      <div
        className='bg-slate-500'
        style={{
          width: `${width * 0.6}px`,
          height: `${width * 0.6}px`,
        }}
      />

      <figcaption
        className='flex flex-col items-center justify-center'
        style={{ gap: `${width * 0.02}px` }}
      >
        <span
          className='flex tracking-widest'
          style={{
            gap: `${width * 0.016}px`,
            fontSize: `${width * 0.070095}px`,
          }}
        >
          <h2>도레미</h2>
          <p>·</p>
          <h2>파솔라</h2>
        </span>

        <p
          style={{
            fontSize: `${width * 0.066}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: '2025.10.20.토요일 오후 2시 \n 메종 드 프라이어 그랜드홀',
          }}
        />
      </figcaption>
    </figure>
  );
};

export default Template1;
