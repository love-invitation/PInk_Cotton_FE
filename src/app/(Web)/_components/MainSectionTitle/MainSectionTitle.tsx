import { MainSectionTitleProps } from './MainSectionTitle.typ';

import { twMerge } from 'tailwind-merge';

const MainSectionTitle = ({ title, subTitle, layoutClassName }: MainSectionTitleProps) => {
  return (
    <header className={twMerge('flex flex-col select-none', layoutClassName)}>
      <h3 className='text-size24 laptop:text-size30 font-semiBold text-nowrap'>{title}</h3>
      <p className='text-size14 laptop:text-size16 text-gray_400 break-keep'>{subTitle}</p>
    </header>
  );
};

export default MainSectionTitle;
