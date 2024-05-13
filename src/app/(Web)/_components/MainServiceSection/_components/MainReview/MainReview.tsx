import { ReviewCard } from '@/components/server';

const MainReview = () => {
  return (
    <article className='flex flex-col gap-[4rem]'>
      <span className='flex flex-col'>
        <h3 className='text-size30 font-semiBold text-black_500'>증명된 고객후기</h3>
        <p className='text-size16 text-gray_400'>
          PINK COTTON과 함께한 고객분들의 솔직한 후기입니다.
        </p>
      </span>

      <ul className='flex gap-[2rem] main_page_1050:flex-row flex-col items-center'>
        <li>
          <ReviewCard
            nickName='잔액부족'
            score={4}
            title='아 좋다!'
            content='너무 좋은데? 대박나라'
          />
        </li>

        <li>
          <ReviewCard
            nickName='잔액부족'
            score={4}
            title='리뷰 제목이네요'
            content='리뷰 내용 입니다.'
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
  );
};

export default MainReview;
