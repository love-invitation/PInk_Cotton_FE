import { UseCardSize } from './useCardSize.type';

const useCardSize = ({ type }: UseCardSize) => {
  switch (type) {
    case 'small':
      return 'w-[11.4rem] h-[20.2rem]';

    case 'medium':
      return 'w-[22.7rem] h-[40.1rem]';

    case 'large':
      return 'w-[41.5rem] h-[81.3rem]';

    case 'mockup':
      return 'w-[32.6rem] h-[68.5rem]';

    default:
      return 'w-[22.7rem] h-[40.1rem]';
  }
};

export default useCardSize;
