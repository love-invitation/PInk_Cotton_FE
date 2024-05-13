import { TemplateItem } from '@/components/server';

const MainBestList = () => {
  return (
    <article className='w-full main_page_550:max-w-[117rem] flex gap-[2rem] overflow-scroll scrollbar-hide items-center justify-center'>
      <TemplateItem
        name='name'
        id='id'
        isNew
        price={40000}
      >
        {null}
      </TemplateItem>
      <TemplateItem
        name='name'
        id='id'
        isNew
        price={40000}
      >
        {null}
      </TemplateItem>
      <TemplateItem
        name='name'
        id='id'
        isNew
        price={40000}
      >
        {null}
      </TemplateItem>
    </article>
  );
};

export default MainBestList;
