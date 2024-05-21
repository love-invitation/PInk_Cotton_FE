import { ReviewCard } from '@/components/server';

import MainSectionTitle from '../../../MainSectionTitle/MainSectionTitle';

const MainReview = () => {
  return (
    <article className='flex flex-col gap-[4rem] items-center laptop:items-start'>
      <div className='w-full px-[1rem]'>
        <MainSectionTitle
          title='증명된 고객후기'
          subTitle='PINKCOTTON과 함께한 고객분들의 솔직한 후기입니다.'
        />
      </div>

      <ul className='flex gap-[2rem] laptop:flex-row flex-col items-center'>
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
            content='리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다. 리뷰 내용 입니다.'
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
