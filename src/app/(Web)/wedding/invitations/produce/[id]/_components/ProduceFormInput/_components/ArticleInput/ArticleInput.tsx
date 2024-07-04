import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { Accordion, Input, TextEditor } from '@/components/client';
import { INVITATION_FORM, InvitationInput } from '@/constants';

const ArticleInput = () => {
  const {
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<InvitationInput>();

  useEffect(() => {
    const content = watch('article.contents');

    if (!content) {
      return setError('article.contents', INVITATION_FORM.REGISTER_OPTION.ARTICLE.CONTENTS);
    }

    clearErrors('article.contents');
  }, [clearErrors, setError, watch]);

  return (
    <Accordion
      buttonTitle='모시는 글'
      type='edit'
      defaultToggleValue
    >
      <Input className='flex-col gap-[1.5rem] py-[4rem] justify-center'>
        <div className='flex items-center gap-[3.3rem]'>
          <Input.Label>제목</Input.Label>
          <Input.Input
            name='article.title'
            placeholder='소중한 분들을 초대합니다.'
            registerOptions={INVITATION_FORM.REGISTER_OPTION.ARTICLE.TITLE}
          />
        </div>
        <Input.ErrorMessage className='self-center'>
          {errors.article?.title?.message}
        </Input.ErrorMessage>
        <div className='flex gap-[3.3rem] h-[40rem]'>
          <Input.Label>내용</Input.Label>
          <TextEditor name='article.contents' />
        </div>
        <Input.ErrorMessage className='self-center'>
          {errors.article?.contents?.message}
        </Input.ErrorMessage>
      </Input>
    </Accordion>
  );
};

export default ArticleInput;
