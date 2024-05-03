import { TemplateCardProps } from './TemplateCard.type';
import { useCardSize } from './hooks';

import { twJoin, twMerge } from 'tailwind-merge';

const TemplateCard = ({ children, size = 'medium', className }: TemplateCardProps) => {
  const cardSize = useCardSize({ type: size });

  return (
    <figure
      className={twMerge(
        twJoin(
          'w-[11.5rem] h-[20.2rem] shadow-shadow_500 rounded-radius40 overflow-hidden',
          cardSize,
        ),
        className,
      )}
    >
      {children}
    </figure>
  );
};

export default TemplateCard;
