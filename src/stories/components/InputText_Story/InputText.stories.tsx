import { FormProvider, useForm } from 'react-hook-form';

import InputText from '@/components/client/InputText/InputText';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputText Component
 *
 *  ### Props
 *  - **children : **자식으로 InputText의 서브 컴포넌트를 지원합니다. - InputText.Input | InputText.Label | InputText.ErrorMessage
 *  - **className : **Tailwind CSS를 사용하여 InputText의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **div태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 메인 컴포넌트 : InputText : Wrapper 역할
 * ### 서브 컴포넌트 : InputText.Input | InputText.Label | InputText.ErrorMessage
 *
 * ### 사용하는 곳에서 필요한 컴포넌트들을 조합하여 사용하면 됩니다.
 */

const meta = {
  title: 'Components/Input/InputText',
  component: InputText,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      description: '자식으로 올 서브 컴포넌트를 지정합니다.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 InputText의 스타일을 추가 및 수정 합니다.',
    },
  },

  decorators: [
    (Story) => {
      const form = useForm();
      const { watch, getValues } = form;
      watch();

      return (
        <FormProvider {...form}>
          <Story />
          <p style={{ margin: '1rem 0rem', color: 'black' }}>{JSON.stringify(getValues())}</p>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    children: (
      <>
        <InputText.Label>레이블</InputText.Label>
        <InputText.Input
          placeholder='이름'
          name='name'
        />
        <InputText.ErrorMessage>에러 메세지</InputText.ErrorMessage>
      </>
    ),
  },
};
