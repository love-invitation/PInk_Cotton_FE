'use client';

import { StarIcon } from '@/components/server';
import { SCORE_LIST } from '@/constants';

import { ReviewScoreActionProps } from './ReviewScoreAction.type';
import { useChangeReviewScore } from './hooks';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const ReviewScoreAction = ({ onClick, score = 0, className = '' }: ReviewScoreActionProps) => {
  const { handleClickStar, currentScore } = useChangeReviewScore({ score, onClick });

  return (
    <ul className={twMerge('flex gap-[1.2rem]', className)}>
      {SCORE_LIST.map((scoreValue) => (
        <li key={`${scoreValue}_review_score`}>
          <motion.button
            type='button'
            whileTap={{ scale: 0.9 }}
            whileHover={{ filter: 'brightness(90%)' }}
            aria-label={`review_action_${score}`}
            onClick={() => handleClickStar(scoreValue)}
          >
            <StarIcon
              size='2.8rem'
              fill={currentScore < scoreValue ? '#BBBBBB' : '#FFD400'}
            />
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

export default ReviewScoreAction;
