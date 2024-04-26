import { ReviewScoreAction } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## ReviewScore Action Component
 *
 * 후기 작성에서 사용자에게 Review Score를 전달 받기 위해 사용됩니다.
 *
 *  ### Props
 *  - **score : **초기 default score를 전달 받습니다. - **default : 0**
 *  - **onClick : **Star Icon을 클릭할때의 메서드를 전달 받습니다. - **( score : number ) => void**
 *  - **className : **Review Score의 layout을 스타일링 할 수 있습니다. - **tailwindCSS**
 */

const meta = {
  title: 'Components/ReviewScoreAction',
  component: ReviewScoreAction,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    score: {
      control: 'inline-radio',
      options: [1, 2, 3, 4, 5],
      description: '구분선의 방향을 지정합니다.',
    },
    onClick: {
      control: { disable: true },
      description: 'Star Icon을 클릭할때의 메서드를 전달 받습니다. ( score : number ) => void',
    },
    className: {
      control: 'text',
      description: 'Review Score의 layout을 스타일링 할 수 있습니다. - tailwindCSS',
    },
  },

  args: {
    score: 0,
    onClick: () => {},
  },
} satisfies Meta<typeof ReviewScoreAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
