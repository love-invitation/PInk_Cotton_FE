import { ScoreType } from '@/types/originType/Score';

export interface UseChangeReviewScoreProps {
  score: ScoreType;
  onClick: (score: ScoreType) => void;
}
