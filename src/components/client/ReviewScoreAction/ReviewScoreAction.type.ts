import { ScoreType } from '@/types/originType/Score';

export interface ReviewScoreActionProps {
  onClick: (score: ScoreType) => void;
  score: ScoreType;

  className?: string;
}
