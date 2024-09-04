'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { AlertModal, Button, Input } from '@/components/client';
import { MUTATE_OPTIONS } from '@/constants';
import { useToggle } from '@/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { INVITE_ANIMATION } from '../../../../Invite.constants';
import { useBookPageStore } from '../../store';
import { CreateBookCommentProps } from './CreateBookComment.type';

import { motion } from 'framer-motion';

const CreateBookComment = ({ inviteId, inView }: CreateBookCommentProps) => {
  const { resetPage } = useBookPageStore();
  const { isToggle, handleSetFalse, handleSetTrue } = useToggle();
  const queryClient = useQueryClient();

  const formMethod = useForm({
    defaultValues: {
      name: '',
      password: '',
      message: '',
    },
  });

  const { mutate } = useMutation(MUTATE_OPTIONS.INVITATION_GUEST_BOOK_POST());
  const handleSubmit: SubmitHandler<{ name: string; password: string; message: string }> = (
    data,
  ) => {
    mutate(
      { inviteId, data },
      {
        onSuccess: () => {
          queryClient.clear();
          formMethod.setValue('name', '');
          formMethod.setValue('password', '');
          formMethod.setValue('message', '');
          handleSetTrue();
          resetPage();
        },
      },
    );
  };

  return (
    <FormProvider {...formMethod}>
      <motion.div
        className='w-full px-[1.6rem] flex flex-col gap-[1rem] relative'
        initial={INVITE_ANIMATION.INIT}
        animate={inView ? INVITE_ANIMATION.ANIMATE : {}}
        transition={{ ...INVITE_ANIMATION.DURATION, delay: 0.6 }}
      >
        <Input.Input
          name='name'
          placeholder='이름'
          registerOptions={{
            required: '이름을 입력해주세요.',
          }}
        />

        {formMethod.formState.errors.name && (
          <Input.ErrorMessage>{formMethod.formState.errors.name.message}</Input.ErrorMessage>
        )}

        <Input.Input
          name='password'
          placeholder='비밀번호'
          registerOptions={{
            required: '비밀번호를 입력해주세요.',
            maxLength: {
              message: '4글자 이상 12글자 이하로 작성해주세요.',
              value: 12,
            },
            minLength: {
              message: '4글자 이상 12글자 이하로 작성해주세요.',
              value: 4,
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: '영어, 숫자만 사용 가능 합니다.',
            },
          }}
        />

        {formMethod.formState.errors.password && (
          <Input.ErrorMessage>{formMethod.formState.errors.password.message}</Input.ErrorMessage>
        )}

        <Input.Input
          name='message'
          placeholder='축하 메세지'
          registerOptions={{
            required: '메세지 입력해주세요.',
          }}
        />

        {formMethod.formState.errors.message && (
          <Input.ErrorMessage>{formMethod.formState.errors.message.message}</Input.ErrorMessage>
        )}

        <Button
          type='submit'
          radius='0.8rem'
          backgroundColor='black'
          className='h-fit py-[1.6rem]'
          onClick={formMethod.handleSubmit(handleSubmit)}
        >
          축하메세지 남기기
        </Button>
      </motion.div>

      <AlertModal
        isShow={isToggle}
        onClose={handleSetFalse}
        message='축하메세지가 등록되었습니다.'
      />
    </FormProvider>
  );
};

export default CreateBookComment;
