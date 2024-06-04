import { ArticleInput, CoverInput, GroomBrideInput } from './_components';

const ProduceFormInput = () => {
  return (
    <section className='flex flex-col gap-[2rem]'>
      <CoverInput />
      <ArticleInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
    </section>
  );
};

export default ProduceFormInput;
