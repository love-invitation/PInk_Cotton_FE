import { RightIntroduceItem } from './_components';
import { INTRODUCE_LIST } from './_constants';

const MainRightIntroduce = () => {
  return (
    <ul className='flex flex-col gap-[4rem] px-[1rem]'>
      {INTRODUCE_LIST.map(({ icon, title, description }) => (
        <RightIntroduceItem
          key={title}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};

export default MainRightIntroduce;
