import { ReviewCard } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## ReviewCard Component
 *
 * 후기 내용을 보여줍니다.
 *
 *  ### Props
 *  - **nickName : **사용자의 nickName을 전달받아 닉네임의 중간값을 숨김 처리하여 사용합니다.
 *  - **score : **Review score를 전달 받습니다.
 *  - **title : **Review의 제목을 전달 받아 보여줍니다.
 *  - **content : **Review의 메인 content를 전달 받아 보여줍니다.
 */

const meta = {
  title: 'Components/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    score: {
      score: 'inline-radio',
      options: [0, 1, 2, 3, 4, 5],
      description: 'Review score를 전달 받습니다.',
    },
    nickName: {
      control: 'text',
      description: '사용자의 nickName을 전달받아 닉네임의 중간값을 숨김 처리하여 사용합니다.',
    },
    title: {
      control: 'text',
      description: 'Review의 제목을 전달 받아 보여줍니다.',
    },
    content: {
      control: 'text',
      description: 'Review의 메인 content를 전달 받아 보여줍니다.',
    },
  },

  args: {
    nickName: '하땡정',
    score: 4,
    title: '가성비가 정말 좋은 곳!',
    content:
      '다른 사이트들 가격 비교해봤는데, 모바일 청첩장 전문으로 하는 곳 중에 가장 가성비가 좋았습니다ㅋㅋㅋ 싸게 잘해서 기분 좋네요!',
  },

  decorators: [
    (ReviewCardComponent) => {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40rem',
            height: '30rem',
          }}
        >
          <ReviewCardComponent />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Overflow: Story = {
  args: {
    nickName: '잔액이부합니다',
    score: 5,
    title: '이건 제목입니다. 이건 제목입니다. 이건 제목입니다. 이건 제목입니다.',
    content:
      '내용이 많을때 보여지는 방법 내용이 많을때 보여지는 방법 내용이 많을때 보여지는 방법 내용이 많을때 보여지는 방법 내용이 많을때 보여지는 방법 내용이 많을때 보여지는 방법',
  },
};
