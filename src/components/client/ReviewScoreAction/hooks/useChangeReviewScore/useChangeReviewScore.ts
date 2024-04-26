'use client';

import { useState } from 'react';

import { UseChangeReviewScoreProps } from './useChangeReviewScore.type';

const useChangeReviewScore = ({ score, onClick }: UseChangeReviewScoreProps) => {
  const [currentScore, setCurrentScore] = useState(score);

  const handleClickStar = (newScore: number) => {
    if (currentScore === 1 && newScore === currentScore) {
      setCurrentScore(0);
      onClick(0);
      return;
    }

    setCurrentScore(newScore);
    onClick(newScore);
  };

  return { handleClickStar, currentScore };
};

export default useChangeReviewScore;
