import {
  ArticleInput,
  CoverInput,
  GroomBrideInput,
  ReservationInput,
  TransportationInput,
  WeddingPlaceInput,
} from './_components';

const ProduceFormInput = () => {
  return (
    <section className='w-[60%] min-w-[30rem] flex flex-col gap-[2rem] mobile:w-full'>
      <CoverInput />
      <ArticleInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
      <ReservationInput />
      <WeddingPlaceInput />
      <TransportationInput />
    </section>
  );
};

export default ProduceFormInput;
