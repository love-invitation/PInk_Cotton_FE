import { LoginContainer } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## Login Container 컴포넌트
 *
 * Login 디자인을 재활용하기 위해 만든 Container Component 입니다.
 */

const meta: Meta<typeof LoginContainer> = {
  title: 'Components/LoginContainer',
  component: LoginContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
