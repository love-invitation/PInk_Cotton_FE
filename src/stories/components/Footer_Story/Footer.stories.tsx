import { Footer } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Footer Component
 *
 * 전역적으로 사용되어질 Footer Component ( RSC ) 입니다. <br>
 * 기본 속성으로 `position : absolute` `bottom : 0` 이 적용되어져 Layout 내부 존재시 하단에 자동으로 생성됩니다.
 *
 */

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  decorators: [
    (FooterComponent) => {
      return (
        <div
          style={{
            width: '80rem',
            height: '40rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <FooterComponent />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
