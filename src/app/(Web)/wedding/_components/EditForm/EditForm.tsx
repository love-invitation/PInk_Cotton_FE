import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { InviteForm } from '@/components/client';
import { DOMAIN_URL, INVITATION_FORM, MUTATE_OPTIONS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

import { EditFormProps } from './EditForm.type';

const EditForm = ({
  invitation,
  coverImageFile,
  thumbnailImageFile,
  galleryImageFiles,
}: EditFormProps) => {
  const route = useRouter();
  const { mutate, isPending } = useMutation(MUTATE_OPTIONS.INVITATION_PUT());
  const form = useForm(
    INVITATION_FORM.INITIAL_STATE_OPTION({
      invitation,
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
          <InviteForm.InvitationCover
            isPending={isPending}
            onClick={(id, invitationInfo) =>
              mutate(
                { id: BigInt(id), invitationInfo },
                {
                  onSuccess: () => route.push(DOMAIN_URL.PROFILE),
                },
              )
            }
          />
          <InviteForm.ProduceFormInput />
          <InviteForm.InvitationCoverPreview />
        </div>
      </form>
    </FormProvider>
  );
};

export default EditForm;
