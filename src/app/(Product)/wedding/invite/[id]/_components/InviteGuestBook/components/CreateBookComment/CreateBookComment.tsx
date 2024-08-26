'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { Button, Input } from '@/components/client';
import { MUTATE_OPTIONS } from '@/constants';
import { useMutation } from '@tanstack/react-query';

import { CreateBookCommentProps } from './CreateBookComment.type';

const CreateBookComment = ({ inviteId }: CreateBookCommentProps) => {
  const formMethod = useForm({
    defaultValues: {
      name: '',
      password: '',
      message: '',
    },
  });

  const { mutate } = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_POST());

  return (
    <FormProvider {...formMethod}>
      <div className='w-full px-[1.6rem] flex flex-col gap-[1rem]'>
        <Input.Input
          name='name'
          placeholder='이름'
        />

        <Input.Input
          name='password'
          placeholder='비밀번호'
        />

        <Input.Input
          name='message'
          placeholder='축하 메세지'
        />

        <Button
          type='submit'
          radius='0.8rem'
          backgroundColor='black'
          className='h-fit py-[1.6rem]'
          onClick={formMethod.handleSubmit((data) => mutate({ inviteId, data }))}
        >
          축하메세지 남기기
        </Button>
      </div>
    </FormProvider>
  );
};

export default CreateBookComment;
