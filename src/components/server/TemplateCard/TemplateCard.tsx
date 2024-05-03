import { TemplateCardProps } from './TemplateCard.type';
import { PhoneMockup } from './components';
import { useCardSize } from './hooks';

import { twJoin, twMerge } from 'tailwind-merge';

const TemplateCard = ({ children, size = 'medium', className }: TemplateCardProps) => {
  const cardSize = useCardSize({ type: size });

  return (
    <figure
      className={twMerge(twJoin('w-[11.5rem] h-[20.2rem] overflow-hidden', cardSize), className)}
    >
      {size !== 'mockup' && children}

      {size === 'mockup' && <PhoneMockup>{children}</PhoneMockup>}
    </figure>
  );
};

export default TemplateCard;
