'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { DOMAIN_URL, INVITATION_FORM, MUTATE_OPTIONS, QUERY_OPTIONS } from '@/constants';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  InvitationCover,
  InvitationCoverPreview,
  ProduceFormInput,
} from '../../produce/[id]/_components';

const EditPage = ({ params }: { params: { id: string } }) => {
  const route = useRouter();
  const { data } = useSuspenseQuery(QUERY_OPTIONS.INVITATION(params.id));
  const { data: imageFiles } = useSuspenseQuery(QUERY_OPTIONS.COVERT_IMAGE_FILE(data));
  const { mutate, isPending } = useMutation(MUTATE_OPTIONS.INVITATION_PUT());
  const { coverImageFile, thumbnailImageFile, galleryImageFiles } = imageFiles;
  const form = useForm(
    INVITATION_FORM.INITIAL_STATE_OPTION({
      invitation: data,
      coverImageFile,
      thumbnailImageFile,
      galleryImageFiles,
    }),
  );

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
                { id, invitationInfo },
                {
                  onSuccess: () => route.push(DOMAIN_URL.PROFILE),
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

export default EditPage;
