import { Footer, Header } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Header Component
 *
 * 현재 Header는 반응형 HeaderResponsive Component와 HeaderNoneResponsive 두개의 컴포넌트를 통해 제작되었습니다.<br>
 * 900px을 기준으로 반응형이 동작하게 구현되었습니다.<br>
 */

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  decorators: [
    (HeaderComponent) => {
      return (
        <div style={{ width: '100%  ', minWidth: '40rem', maxWidth: '120rem' }}>
          <HeaderComponent />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
