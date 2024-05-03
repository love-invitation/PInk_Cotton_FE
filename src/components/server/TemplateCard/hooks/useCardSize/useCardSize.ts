import { UseCardSize } from './useCardSize.type';

const useCardSize = ({ type }: UseCardSize) => {
  switch (type) {
    case 'small':
      return 'w-[11.4rem] h-[20.2rem] rounded-radius20 shadow-shadow_500';

    case 'medium':
      return 'w-[22.7rem] h-[40.1rem] rounded-radius20 shadow-shadow_500';

    case 'large':
      return 'w-[41.5rem] h-[81.3rem] rounded-radius20 shadow-shadow_500';

    case 'mockup':
      return 'w-[32.6rem] h-[68.5rem] rounded-radius40';

    default:
      return 'w-[22.7rem] h-[40.1rem] rounded-radius20 shadow-shadow_500';
  }
};

export default useCardSize;
