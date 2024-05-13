import ReviewScore from '../ReviewScore/ReviewScore';
import { ReviewCardProps } from './ReviewCard.type';
import { hideNickName } from './utils';

const ReviewCard = ({ nickName, score, title, content }: ReviewCardProps) => {
  const newNickName = hideNickName(nickName);

  return (
    <div className='w-[32rem] h-[20rem] rounded-[2.4rem] shadow-shadow_500 flex flex-col items-center pt-[3rem] pb-[1rem] px-[1.6rem] gap-[1.2rem] select-none'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-[1.6rem] font-semiBold text-gray_200 tracking-[0.18rem]'>
          {newNickName}
          <small className='text-[1.6rem] font-semiBold text-gray_200 ml-1'>님</small>
        </p>
        <ReviewScore score={score} />
      </div>

      <h6 className='w-full text-[1.6rem] font-semiBold overflow-hidden text-nowrap text-ellipsis mt-[1.4rem]'>
        {title}
      </h6>

      <p className='w-full text-[1.4rem] font-medium text-gray_200 leading-[2.8rem] overflow-hidden line-clamp-2'>
        {content}
      </p>
    </div>
  );
};

export default ReviewCard;
