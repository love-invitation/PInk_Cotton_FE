import { PinkMap } from '@/components/client';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Pink Map Component - Kakao Map
 *
 * ### Props
 * - **center : **위도 lat, 경도 lng를 전달하여 Map의 중심을 지정합니다.
 *
 * - **width ? : **지도의 초기 너비를 지정합니다. - default 100%
 * - **height ? : **지도의 초기 높이를 지정합니다. - default 100%
 *
 * 🔥 현재 Storybook에서는 스크립트 문제로 첫 렌더링에 정상동작하지 않을 수 있습니다.<br>
 * 만약 Map이 나타나지 않는다면, 다른 Story를 방문후 재시도 해주세요!
 * */
const meta = {
  title: 'Components/PinkMap',
  component: PinkMap,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    center: {
      description: 'GeoPosition( lat , lng )을 전달하여 Center를 지정합니다.',
    },
    width: {
      control: 'number',
      description: 'Map의 너비를 지정합니다. - number | string',
      defaultValue: '100%',
    },
    height: {
      control: 'number',
      description: 'Map의 높이를 지정합니다. - number | string',
      defaultValue: '100%',
    },
  },

  args: {
    center: {
      lat: 37.498095,
      lng: 127.02761,
    },
    width: '40rem',
    height: '40rem',
  },
} satisfies Meta<typeof PinkMap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
