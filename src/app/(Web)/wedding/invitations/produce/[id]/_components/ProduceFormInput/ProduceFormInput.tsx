import { ArticleInput, CoverInput, GroomBrideInput, WeddingPlageInput } from './_components';

const ProduceFormInput = () => {
  return (
    <section className='w-[60%] min-w-[30rem] flex flex-col gap-[2rem] mobile:w-full'>
      <WeddingPlageInput />
      <CoverInput />
      <ArticleInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
    </section>
  );
};

export default ProduceFormInput;
