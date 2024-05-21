import ReviewScore from '../ReviewScore/ReviewScore';
import { ReviewCardProps } from './ReviewCard.type';
import { hideNickName } from './utils';

const ReviewCard = ({ nickName, score, title, content }: ReviewCardProps) => {
  const newNickName = hideNickName(nickName);

  return (
    <div className='review_card_max:w-[24rem] review_card_max:h-[16rem] w-[32rem] h-[20rem] review_card_max:rounded-[1.6rem] rounded-[2.4rem] shadow-shadow_500 flex flex-col items-center review_card_max:pt-[1.2rem] pt-[3rem] review_card_max:pb-[0.6rem] pb-[1rem] review_card_max:px-[1rem] px-[1.6rem] review_card_max:gap-[0.4rem] gap-[1.2rem] select-none'>
      <div className='w-full flex justify-between items-center review_card_max:flex-col review_card_max:items-start review_card_max:gap-[0.8rem]'>
        <p className='text-[1.6rem] review_card_max:text-[1.2rem] font-semiBold text-gray_200 tracking-[0.18rem]'>
          {newNickName}
          <small className='text-[1.6rem] review_card_max:text-[1.2rem] font-semiBold text-gray_200 ml-1'>
            님
          </small>
        </p>
        <ReviewScore score={score} />
      </div>

      <h6 className='w-full review_card_max:text-size14 text-size16 font-semiBold overflow-hidden text-nowrap text-ellipsis mt-[1.4rem]'>
        {title}
      </h6>

      <p className='w-full review_card_max:text-size12 text-size14 font-medium text-gray_200 review_card_max:leading-[1.8rem] leading-[2.8rem] overflow-hidden line-clamp-2'>
        {content}
      </p>
    </div>
  );
};

export default ReviewCard;
