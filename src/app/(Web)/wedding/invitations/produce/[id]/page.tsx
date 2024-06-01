'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { InvitationCover, ProduceFormInput } from './_components';
import { DEFAULT_VALUE } from './_constants';

const ProducePage = () => {
  const form = useForm({
    defaultValues: DEFAULT_VALUE.INVITATION,
  });

  return (
    <FormProvider {...form}>
      <form className='flex py-[4.8rem] px-[12rem] gap-[2rem]'>
        <InvitationCover />
        <ProduceFormInput />
      </form>
    </FormProvider>
  );
};

export default ProducePage;
