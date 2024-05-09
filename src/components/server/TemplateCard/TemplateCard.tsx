import { TemplateCardProps } from './TemplateCard.type';
import { useCardSize } from './hooks';

import { twJoin, twMerge } from 'tailwind-merge';

const TemplateCard = ({ children, size = 'medium', className }: TemplateCardProps) => {
  const cardSize = useCardSize({ type: size });

  return (
    <div
      className={twMerge(twJoin('w-[11.5rem] h-[20.2rem] overflow-hidden', cardSize), className)}
    >
      {children}
    </div>
  );
};

export default TemplateCard;
