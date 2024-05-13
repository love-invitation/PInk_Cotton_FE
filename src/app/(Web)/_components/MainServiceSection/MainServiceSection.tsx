import { ReviewCard } from '@/components/server';

const MainServiceSection = () => {
  return (
    <section
      id='calc_header_height'
      className='w-full py-[4rem] flex flex-col items-center justify-center'
    >
      <article className='flex flex-col gap-[4rem]'>
        <span className='flex flex-col'>
          <h3 className='text-size30'>증명된 고객후기</h3>
          <p className='text-size16 text-gray_400'>
            PINK COTTON과 함께한 고객분들의 솔직한 후기입니다.
          </p>
        </span>

        <ul className='flex gap-[2rem]'>
          <li>
            <ReviewCard
              nickName='잔액부족'
              score={4}
              title='아 좋다!'
              content='너무 좋은데?'
            />
          </li>

          <li>
            <ReviewCard
              nickName='잔액부족'
              score={4}
              title='아 좋다!'
              content='너무 좋은데?'
            />
          </li>

          <li>
            <ReviewCard
              nickName='잔액부족'
              score={4}
              title='아 좋다!'
              content='너무 좋은데?'
            />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default MainServiceSection;
