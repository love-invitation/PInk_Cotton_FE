import { ArticleInput, CoverInput } from './_components';

const ProduceFormInput = () => {
  return (
    <section className='flex flex-col gap-[2rem]'>
      <CoverInput />
      <ArticleInput />
    </section>
  );
};

export default ProduceFormInput;
