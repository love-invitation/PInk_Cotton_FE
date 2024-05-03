import Image from 'next/image';

import BannerImage from '@/assets/images/banner.png';
import { Banner } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## Banner 컴포넌트
 *
 * 이 컴포넌트는 웹사이트의 배너를 표시하는 데 사용됩니다.
 *
 * ### 속성(Props)
 * - **className:** Tailwind CSS를 사용하여 Banner section 스타일을 추가 및 수정합니다.
 * - **children:** 배너 영역에 들어갈 요소들을 받습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **InvitationTypesPageBanner:** 청첩장 종류 페이지 배너 예시입니다.
 * 2. **MyPageBanner:** 마이페이지 배너 예시입니다..
 */

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: '배너 영역에 들어갈 요소들을 받습니다.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 Banner section 스타일을 추가 및 수정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InvitationTypesPageBanner: Story = {
  args: {
    children: (
      <>
        <Image
          src={BannerImage}
          alt='배너'
          priority
          className='w-full h-full'
        />
        <p
          style={{
            position: 'absolute',
            right: '20%',
            bottom: '10%',
            color: 'white',
            fontSize: '2.4rem',
            fontWeight: 'bold',
            textAlign: 'right',
          }}
        >
          가장 아름답고, <br />
          쉽게 특별한 순간을 알려보세요.
        </p>
      </>
    ),
  },
};

export const MyPageBanner: Story = {
  args: {
    children: (
      <>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>안내 사항</h1>
        <ul style={{ listStyle: 'disc inside none', fontSize: '1.8rem', margin: '3rem 0' }}>
          <li>결제 후에는 자유롭게 모바일청첩장을 사용할 수 있습니다.</li>
          <li>제작일과 관계없이 예식일 +30일 후 청첩장이 삭제됩니다.</li>
        </ul>
      </>
    ),
  },
};
