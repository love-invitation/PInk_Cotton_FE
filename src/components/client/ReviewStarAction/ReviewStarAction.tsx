'use client';

import { useState } from 'react';

import { StarIcon } from '@/components/server';

import { ReviewStarActionProps } from './ReviewStarAction.type';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const scoreList = [1, 2, 3, 4, 5];

const ReviewStarAction = ({ onClick, score, className = '' }: ReviewStarActionProps) => {
  const [currentScore, setCurrentScore] = useState(score);

  const handleClickStart = (newScore: number) => {
    if (currentScore === 1 && newScore === currentScore) {
      setCurrentScore(0);
      onClick(0);
      return;
    }

    setCurrentScore(newScore);
    onClick(newScore);
  };

  return (
    <ul className={twMerge('flex gap-[1.2rem]', className)}>
      {scoreList.map((scoreValue) => (
        <li key={`${scoreValue}_start_review`}>
          <motion.button
            type='button'
            whileTap={{ scale: 0.9 }}
            whileHover={{ filter: 'brightness(90%)' }}
            aria-label={`review_action_${score}`}
            onClick={() => handleClickStart(scoreValue)}
          >
            <StarIcon
              size={28}
              fill={currentScore < scoreValue ? '#BBBBBB' : '#FFD400'}
            />
          </motion.button>
        </li>
      ))}
    </ul>
  );
};

export default ReviewStarAction;
