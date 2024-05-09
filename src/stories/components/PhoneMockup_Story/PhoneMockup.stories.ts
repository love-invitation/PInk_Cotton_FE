import { PhoneMockup } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Phone Mockup Component
 *
 * I phone을 기반으로 제작한 Phone Mockup 입니다.
 *
 *  ### Props
 *  - **children : **Mockup 내부에 표현할 요소를 전달받습니다.
 *  - **width ? : **Mockup 의 너비를 전달받습니다.
 *  - **height ? : **Mockup 의 높이를 전달받습니다.
 */

const meta = {
  title: 'Components/PhoneMockup',
  component: PhoneMockup,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: { disable: true },
      description: 'Mockup 내부에 표현할 요소를 전달받습니다.',
    },
    width: {
      control: 'number',
      description: 'Mockup 의 너비를 전달받습니다.',
    },
    height: {
      control: 'number',
      description: 'Mockup 의 높이를 전달받습니다.',
    },
  },

  args: {
    children: null,
  },
} satisfies Meta<typeof PhoneMockup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
