import ReviewScore from '../ReviewScore/ReviewScore';
import { ReviewCardProps } from './ReviewCard.type';

const ReviewCard = ({ nickName, score }: ReviewCardProps) => {
  const hideNickName = [
    nickName[0],
    '*'.repeat(nickName.length - 2),
    nickName[nickName.length - 1],
  ].join('');

  return (
    <div className='w-[32rem] h-[18rem] rounded-[2.8rem] shadow-shadow_500 flex flex-col items-center p-[2rem]'>
      <div className='w-full flex justify-between items-center'>
        <p className='text-[1.2rem] font-semiBold text-gray_200 tracking-[0.24rem]'>
          {hideNickName}
          <small className='text-[1.2rem] font-semiBold text-gray_200 ml-1'>님</small>
        </p>
        <ReviewScore score={score} />
      </div>
    </div>
  );
};

export default ReviewCard;
