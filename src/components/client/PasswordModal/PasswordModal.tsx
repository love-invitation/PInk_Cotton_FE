import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '../Button/Button';
import InputWrapper from '../Input/InputWrapper/InputWrapper';
import { Modal } from '../Modal';
import { PasswordModalProps } from './PasswordModal.type';

const PasswordModal = ({ isShow, onClose, onAccept }: PasswordModalProps) => {
  const form = useForm({ defaultValues: { password: '' }, mode: 'onChange' });

  const handleSubmit: SubmitHandler<{ password: string }> = ({ password }) => {
    onAccept(password);
    form.setValue('password', '');
    onClose();
  };

  return (
    <Modal
      isShow={isShow}
      clickAwayEnable
      onClose={onClose}
    >
      <article className='w-[32rem] py-[1rem] flex flex-col gap-[2rem]'>
        <FormProvider {...form}>
          <InputWrapper className='flex flex-col gap-[0.8rem]'>
            <InputWrapper.Input
              name='password'
              placeholder='비밀번호를 입력해주세요.'
              registerOptions={{
                required: '비밀번호를 입력해주세요!',
                minLength: {
                  message: '4글자 이상 12글자 이하로 작성해주세요.',
                  value: 4,
                },
                maxLength: {
                  message: '4글자 이상 12글자 이하로 작성해주세요.',
                  value: 12,
                },
                pattern: {
                  value: /^[가-힣a-zA-Z0-9]+$/,
                  message: '한글, 영어, 숫자만 사용 가능 합니다.',
                },
              }}
            />

            {form.formState.errors.password && (
              <InputWrapper.ErrorMessage>
                {form.formState.errors.password.message}
              </InputWrapper.ErrorMessage>
            )}
          </InputWrapper>
        </FormProvider>

        <Button
          backgroundColor='black'
          onClick={form.handleSubmit(handleSubmit)}
        >
          삭제하기
        </Button>
      </article>
    </Modal>
  );
};

export default PasswordModal;
