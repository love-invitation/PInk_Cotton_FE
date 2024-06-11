import {
  AccountInput,
  ArticleInput,
  ContactsInput,
  CoverInput,
  GalleryInput,
  GroomBrideInput,
  ReservationInput,
  TransportationInput,
  WeddingPlaceInput,
} from './_components';

const ProduceFormInput = () => {
  return (
    <section className='w-[60%] min-w-[30rem] flex flex-col gap-[2rem] mobile:w-full'>
      <AccountInput />
      <ContactsInput />
      <CoverInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
      <ArticleInput />
      <ReservationInput />
      <WeddingPlaceInput />
      <TransportationInput />
      <GalleryInput />
    </section>
  );
};

export default ProduceFormInput;
