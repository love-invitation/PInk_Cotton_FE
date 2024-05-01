import { Carousel } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Divider Component
 *
 *  ### Props
 *  - **srcList : **캐러셀 내부 보여질 이미지들의 src 주소를 전달받습니다.
 *  - **width ? : **캐러셀의 너비를 전달받습니다. - default : 100%
 *  - **height ? : **캐러셀의 높이를 전달받습니다. - default : 100%
 *
 *  - **className : **Tailwind CSS를 사용하여 캐러셀의 스타일을 추가 및 수정 합니다.
 *
 * 캐러셀을 daisy ui 라이브러리를 기반으로 제작하였습니다. <br>
 */

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    srcList: {
      description: '캐러셀 내부 보여질 이미지들의 src 주소를 전달받습니다.',
    },
    width: {
      control: 'text',
      description: '캐러셀의 너비를 전달받습니다. - default : 100%',
    },
    height: {
      control: 'text',
      description: '캐러셀의 높이를 전달받습니다. - default : 100%',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 캐러셀의 스타일을 추가 및 수정 합니다.',
    },
  },

  args: {
    srcList: [
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705465317/Stack%20Logo/Typescript_logo_wconzw.png',
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705465048/Stack%20Logo/JavaScript-logo_havqfw.png',
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463855/Stack%20Logo/npm-Logo_dj9tp0.png',
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463856/Stack%20Logo/Slack-Logo_z2bpdd.webp',
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705465147/Stack%20Logo/logo-2582747_1280_bdtnot.png',
      'https://res.cloudinary.com/dalxgxu2o/image/upload/v1705463967/Stack%20Logo/React_logo_zrfmr5.png',
    ],
    width: '40rem',
    height: '40rem',
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
