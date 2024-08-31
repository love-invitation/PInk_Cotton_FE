import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '../Button/Button';
import InputWrapper from '../Input/InputWrapper/InputWrapper';
import { Modal } from '../Modal';
import { PasswordModalProps } from './PasswordModal.type';

const PasswordModal = ({
  isShow,
  isLogin,
  onClose,
  onAccept,
  onLogin,
  onAdminDelete,
}: PasswordModalProps) => {
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
                  value: /^[a-zA-Z0-9]+$/,
                  message: '영어, 숫자만 사용 가능 합니다.',
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

        <div className='w-full py-[1rem] flex items-center justify-evenly'>
          <span className='text-size14 flex flex-col'>
            <p>신랑 신부는 로그인 후</p>
            <p>우측 버튼을 통해 삭제하실 수 있습니다.</p>
          </span>

          {!isLogin && (
            <Button
              className='w-[8rem]'
              onClick={onLogin}
            >
              Login
            </Button>
          )}

          {isLogin && (
            <Button
              className='w-[8rem]'
              onClick={onAdminDelete}
            >
              삭제하기
            </Button>
          )}
        </div>
      </article>
    </Modal>
  );
};

export default PasswordModal;
