import { ReviewScore } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## ReviewScore Component
 *
 * 후기 작성 점수에 따라 별점을 제공하는 Component 입니다.
 *
 *  ### Props
 *  - **score : **score를 전달 받습니다. - **default : 0**
 *  - **className : **Review Score의 layout을 스타일링 할 수 있습니다. - **tailwindCSS**
 */

const meta = {
  title: 'Components/ReviewScore',
  component: ReviewScore,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    score: {
      control: 'inline-radio',
      options: [0, 1, 2, 3, 4, 5],
      description: '구분선의 방향을 지정합니다.',
    },
    className: {
      control: 'text',
      description: 'Review Score의 layout을 스타일링 할 수 있습니다. - tailwindCSS',
    },
  },

  args: {
    score: 0,
  },
} satisfies Meta<typeof ReviewScore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Score1: Story = {
  args: {
    score: 1,
  },
};
export const Score2: Story = {
  args: {
    score: 2,
  },
};
export const Score3: Story = {
  args: {
    score: 3,
  },
};
export const Score4: Story = {
  args: {
    score: 4,
  },
};
export const Score5: Story = {
  args: {
    score: 5,
  },
};
