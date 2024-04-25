import InputWrapper from '@/components/client/Input/InputWrapper/InputWrapper';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputWrapper.ErrorMessage Component
 *
 *  ### Props
 *  - **children : **자식으로 ErrorMessage 콘텐츠를 지원합니다.
 *  - **className : **Tailwind CSS를 사용하여 InputWrapper.ErrorMessage의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **p태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Input/InputErrorMessage',
  component: InputWrapper.ErrorMessage,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof InputWrapper.ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorMessage: Story = {
  args: {
    children: '에러 메세지',
  },
};
