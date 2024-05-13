import {
  ArrowDownIcon,
  ArrowRightIcon,
  CenterIcon,
  CheckIcon,
  Clock3DIcon,
  CloseIcon,
  DotIcon,
  Folder3DIcon,
  LayerIcon,
  Paint3DIcon,
  Send3DIcon,
  StarIcon,
  UserIcon,
} from '@/components/server';
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
      control: { disable: true },
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

export const Close: Story = {
  args: {
    children: <CloseIcon />,
  },
};

export const ArrowDown: Story = {
  args: {
    children: <ArrowDownIcon />,
  },
};

export const ArrowRight: Story = {
  args: {
    children: <ArrowRightIcon />,
  },
};

export const Check: Story = {
  args: {
    children: <CheckIcon />,
  },
};

export const Star: Story = {
  args: {
    children: <StarIcon />,
  },
};

export const Dot: Story = {
  args: {
    children: <DotIcon />,
  },
};

export const User: Story = {
  args: {
    children: <UserIcon />,
  },
};

export const Clock3D: Story = {
  args: {
    children: <Clock3DIcon />,
  },
};

export const Folder3D: Story = {
  args: {
    children: <Folder3DIcon />,
  },
};

export const Send3D: Story = {
  args: {
    children: <Send3DIcon />,
  },
};

export const Paint3D: Story = {
  args: {
    children: <Paint3DIcon />,
  },
};

export const Layer: Story = {
  args: {
    children: <LayerIcon />,
  },
};
