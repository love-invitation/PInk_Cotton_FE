import InputWrapper from '@/components/client/Input/InputWrapper/InputWrapper';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputWrapper.Label Component
 *
 *  ### Props
 *  - **children : **자식으로 label 콘텐츠를 지원합니다.
 *  - **className : **Tailwind CSS를 사용하여 InputWrapper.Label의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **label태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Input/InputLabel',
  component: InputWrapper.Label,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof InputWrapper.Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    children: '레이블',
  },
};
