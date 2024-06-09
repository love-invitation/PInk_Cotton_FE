'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { InvitationCover, InvitationCoverPreview, ProduceFormInput } from './_components';
import { DEFAULT_VALUE } from './_constants';

const ProducePage = () => {
  const form = useForm({
    defaultValues: DEFAULT_VALUE.INVITATION,
  });

  return (
    <FormProvider {...form}>
      <form
        id='calc_header_footer_height'
        className='flex w-full py-[4.8rem] px-[10rem] tablet:px-[5rem] mobile:px-[2rem] gap-[2rem] justify-center'
      >
        <div className='w-full max-w-[140rem] flex tablet:gap-[2rem] gap-[8rem] justify-center mobile:flex-col'>
          <InvitationCover />
          <ProduceFormInput />

          <InvitationCoverPreview />
        </div>
      </form>
    </FormProvider>
  );
};

export default ProducePage;
