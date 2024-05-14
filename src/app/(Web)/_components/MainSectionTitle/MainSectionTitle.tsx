import { MainSectionTitleProps } from './MainSectionTitle.typ';

import { twMerge } from 'tailwind-merge';

const MainSectionTitle = ({ title, subTitle, layoutClassName }: MainSectionTitleProps) => {
  return (
    <header className={twMerge('flex flex-col select-none', layoutClassName)}>
      <h3 className='text-size20 main_page_1050:text-size30 font-semiBold text-nowrap'>{title}</h3>
      <p className='text-size13 main_page_1050:text-size16 text-gray_400 break-keep'>{subTitle}</p>
    </header>
  );
};

export default MainSectionTitle;
