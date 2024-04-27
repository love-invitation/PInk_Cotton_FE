import { FormProvider, useForm } from 'react-hook-form';

import InputWrapper from '@/components/client/Input/InputWrapper/InputWrapper';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputWrapper Component
 *
 *  ### Props
 *  - **children : **자식으로 InputWrapper의 서브 컴포넌트를 지원합니다. - InputWrapper.Input | InputWrapper.Label | InputWrapper.ErrorMessage
 *  - **className : **Tailwind CSS를 사용하여 InputWrapper의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **div태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 메인 컴포넌트 : InputWrapper : Wrapper 역할
 * ### 서브 컴포넌트 : InputWrapper.Input | InputWrapper.Label | InputWrapper.ErrorMessage
 *
 * ### 사용하는 곳에서 필요한 컴포넌트들을 조합하여 사용하면 됩니다.
 */

const meta = {
  title: 'Components/Input/InputWrapper',
  component: InputWrapper,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: { disable: true },
      description: '자식으로 올 서브 컴포넌트를 지정합니다.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 InputWrapper의 스타일을 추가 및 수정 합니다.',
    },
  },

  decorators: [
    (InputWrapperComponent, { args }) => {
      const form = useForm();
      const { watch, getValues } = form;
      watch();

      return (
        <FormProvider {...form}>
          <InputWrapperComponent args={args} />
          <p style={{ margin: '1rem 0rem', color: 'black' }}>{JSON.stringify(getValues())}</p>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof InputWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    children: (
      <>
        <InputWrapper.Label>레이블</InputWrapper.Label>
        <InputWrapper.Input
          type='text'
          name='name'
          placeholder='이름'
        />
        <InputWrapper.ErrorMessage>에러 메세지</InputWrapper.ErrorMessage>
      </>
    ),
  },
};
