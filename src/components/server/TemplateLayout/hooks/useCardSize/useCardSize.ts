import { UseCardSize } from './useCardSize.type';

const useCardSize = ({ type }: UseCardSize) => {
  switch (type) {
    case 'small':
      return 'w-[11.4rem] h-[20.2rem] rounded-radius20 shadow-shadow_500';

    case 'medium':
      return 'w-[22.7rem] h-[40.1rem] rounded-radius20 shadow-shadow_500';

    case 'large':
      return 'w-[41.5rem] h-[73.3rem] rounded-radius40 shadow-shadow_500';

    default:
      return 'w-[22.7rem] h-[40.1rem] rounded-radius20 shadow-shadow_500';
  }
};

export default useCardSize;
