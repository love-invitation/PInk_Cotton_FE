export interface ReviewStarActionProps {
  onClick: (score: number) => void;
  score: number;

  className?: string;
}
