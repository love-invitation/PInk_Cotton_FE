import { CenterIcon } from '@/components/server';
import type { Meta, StoryObj } from '@storybook/react';

import IconBox from './IconBox';

/**
 * **공통 Icon 컴포넌트 모음**
 *
 * 현재 PinkCotton에서 사용되어지는 Icon들을 한눈에 확인할 수 있습니다.
 * */
const meta = {
  title: 'Icons/공통 아이콘 목록',
  component: IconBox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'null',
      description: 'Icon을 보여주기 위한 layout 용도 ( 실제 Component와 무관 )',
    },
  },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
};

export const Center: Story = {
  args: {
    children: <CenterIcon />,
  },
};
