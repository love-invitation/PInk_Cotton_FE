import {
  AccountInput,
  ArticleInput,
  ContactsInput,
  CoverInput,
  GalleryInput,
  GroomBrideInput,
  GuestBookCheck,
  ReservationInput,
  ThumbnailInput,
  TransportationInput,
  WeddingPlaceInput,
} from './_components';

const ProduceFormInput = () => {
  return (
    <section className='w-[60%] min-w-[30rem] flex flex-col gap-[2rem] mobile:w-full'>
      <CoverInput />
      <GroomBrideInput type='groom' />
      <GroomBrideInput type='bride' />
      <ArticleInput />
      <ReservationInput />
      <WeddingPlaceInput />
      <TransportationInput />
      <GalleryInput />
      <ContactsInput />
      <AccountInput />
      <ThumbnailInput />
      <GuestBookCheck />
    </section>
  );
};

export default ProduceFormInput;
