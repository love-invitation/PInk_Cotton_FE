import { Logo } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## Logo 컴포넌트
 *
 * - 이 컴포넌트는 Pink Cotten 로고 사진을 보여주는 컴포넌트입니다.
 * - 클릭 시 메인 페이지로 이동합니다.
 * - 기본적으로 부모 크기에 맞게 크기가 설정 됩니다. 부모 요소에 relative 속성 필수
 *
 * ### 속성(Props)
 * - **...rest:** 이 컴포넌트는 Next/Image 컴포넌트를 내부적으로 사용합니다. src, alt 속성을 제외한 Next/Image의 모든 옵션 값을 `...rest`를 통해 전달할 수 있습니다. 기본 설정으로는 `src='로고 경로'`, `alt='웹 사이트 로고'`, `fill`이 적용됩니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseLogo:**
 * - 기본 로고 이미지 입니다.
 */

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 로고 스타일을 추가 및 수정합니다.',
    },
    width: {
      control: 'number',
      description: '로고 이미지의 넓이를 지정합니다.',
    },
    height: {
      control: 'number',
      description: '로고 이미지의 높이를 지정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseLogo: Story = {
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '286px', height: '51px', position: 'relative' }}>
          <Story />
        </div>
      );
    },
  ],
  args: {},
};
