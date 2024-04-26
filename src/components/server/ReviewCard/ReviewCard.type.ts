import { ScoreType } from '@/types/originType/Score';

export interface ReviewCardProps {
  nickName: string;

  title: string;
  content: string;

  score: ScoreType;
}
