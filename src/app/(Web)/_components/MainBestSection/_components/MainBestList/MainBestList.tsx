import { TemplateItem } from '@/components/server';

import { MainBestListProps } from './MainBestList.type';

const MainBestList = ({ invitation }: MainBestListProps) => {
  return (
    <ul className='w-full main_page_550:max-w-[117rem] flex gap-[2rem] overflow-scroll scrollbar-hide items-center justify-center'>
      {invitation.map(({ templateName, newest, price }) => (
        <TemplateItem
          name={templateName}
          isNew={newest}
          price={price}
          id={templateName}
        >
          {templateName}
        </TemplateItem>
      ))}

      {/* <li>
        <TemplateItem
          name='ddd'
          price={40000}
          id='2fds32'
        >
          #33
        </TemplateItem>
      </li>

      <li>
        <TemplateItem
          name='ddd'
          price={40000}
          id='2fds32'
        >
          #33
        </TemplateItem>
      </li>

      <li>
        <TemplateItem
          name='ddd'
          price={40000}
          id='2fds32'
        >
          #33
        </TemplateItem>
      </li> */}
    </ul>
  );
};

export default MainBestList;
