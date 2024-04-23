import InputText from '@/components/client/InputText/InputText';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputText.Label Component
 *
 *  ### Props
 *  - **children : **자식으로 label 콘텐츠를 지원합니다.
 *  - **className : **Tailwind CSS를 사용하여 InputText.Label의 스타일을 추가 및 수정 합니다.
 *  - **...rest : **label태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Input/Label',
  component: InputText.Label,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof InputText.Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    children: '레이블',
  },
};
