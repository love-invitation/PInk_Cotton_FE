import {
  ArticleInput,
  CoverInput,
  GroomBrideInput,
  ReservationInput,
  TransportationInput,
  WeddingPlageInput,
} from './_components';

const ProduceFormInput = () => {
  return (
    <section className='w-[60%] min-w-[30rem] flex flex-col gap-[2rem] mobile:w-full'>
      <TransportationInput />
      <CoverInput />
      <ArticleInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
      <ReservationInput />
      <WeddingPlageInput />
    </section>
  );
};

export default ProduceFormInput;
