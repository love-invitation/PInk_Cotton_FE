import { ArticleInput, CoverInput, GroomBrideInput, WeddingPlageInput } from './_components';

const ProduceFormInput = () => {
  return (
    <section className='flex flex-col gap-[2rem]'>
      <WeddingPlageInput />
      <CoverInput />
      <ArticleInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
    </section>
  );
};

export default ProduceFormInput;
