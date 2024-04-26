import { ScoreList } from '@/constants';

import { StarIcon } from '../icons';
import { ReviewScoreProps } from './ReviewScore.type';

import { twMerge } from 'tailwind-merge';

const ReviewScore = ({ score = 0, className = '' }: ReviewScoreProps) => {
  return (
    <ul className={twMerge('flex gap-[1.2rem]', className)}>
      {ScoreList.map((scoreValue) => (
        <li key={`${scoreValue}_review_score`}>
          <StarIcon
            size={28}
            fill={score < scoreValue ? '#BBBBBB' : '#FFD400'}
          />
        </li>
      ))}
    </ul>
  );
};

export default ReviewScore;