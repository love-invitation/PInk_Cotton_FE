'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { DOMAIN_URL, INVITATION_FORM, MUTATE_OPTIONS } from '@/constants';
import { PostInvitation } from '@/types/response';
import { useMutation } from '@tanstack/react-query';

import { InvitationCover, InvitationCoverPreview, ProduceFormInput } from './_components';

const ProducePage = () => {
  const route = useRouter();
  const { mutate, isPending } = useMutation(MUTATE_OPTIONS.INVITATION_POST());
  const form = useForm(INVITATION_FORM.BASIC_OPTION);

  return (
    <FormProvider {...form}>
      <form
        id='calc_header_footer_height'
        className='flex w-full py-[4.8rem] px-[10rem] tablet:px-[5rem] mobile:px-[2rem] gap-[2rem] justify-center'
      >
        <div className='w-full max-w-[140rem] flex tablet:gap-[2rem] gap-[8rem] justify-center mobile:flex-col'>
          <InvitationCover
            isPending={isPending}
            onClick={(id, invitationInfo) =>
              mutate(
                { id: Number(id), invitationInfo },
                {
                  onSuccess: ({ result }: PostInvitation) =>
                    route.push(DOMAIN_URL.WEDDING_PREVIEW(result)),
                },
              )
            }
          />
          <ProduceFormInput />
          <InvitationCoverPreview />
        </div>
      </form>
    </FormProvider>
  );
};

export default ProducePage;
