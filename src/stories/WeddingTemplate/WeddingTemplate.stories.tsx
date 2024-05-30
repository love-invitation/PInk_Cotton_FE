import { WeddingTemplates } from '@/components/client';
import { TemplateLayout } from '@/components/server';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Wedding Invitation Template
 *
 * 현재 모든 청첩장 Template의 비율은 width값을 기준으로 동작합니다. <br>
 *
 * ( 현재 작업 비율 : width 228px height 401px )
 *
 * ### Props
 * - **id : **사용할 Wedding Template의 id를 전달받습니다.
 *
 * - **groomName : **신랑의 이름을 전달받습니다.
 * - **brideName : **신부의 이름을 전달받습니다.
 * - **details : **청첩장 내부 여러 결혼식 정보를 전달받습니다. ( 장소, 일시 등.. )
 * - **imageUrl : **청첩장 내부 사진의 url을 전달받습니다.
 * */
const meta = {
  title: 'Wedding Templates',
  component: WeddingTemplates,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    id: {
      control: { type: 'inline-radio' },
      description: '사용할 Wedding Template의 id를 전달받습니다.',
    },

    groomName: {
      control: 'text',
      description: '신랑의 이름을 전달받습니다.',
    },

    brideName: {
      control: 'text',
      description: '신부의 이름을 전달받습니다.',
    },

    details: {
      control: 'text',
      description: 'Accordion 내부에 담을 Component를 전달받습니다.',
    },

    imageUrl: {
      control: 'text',
      description: '청첩장 내부 사진의 url을 전달받습니다.',
    },
  },

  args: {
    id: 'tem2',
    details: '2025.10.20.토요일 오후 2시 \n 메종 드 프라이어 그랜드홀',
    groomName: '도레미',
    brideName: '파솔라',
    imageUrl:
      'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png',
  },

  decorators: [
    (WeddingTemplateComponent, { args }) => {
      return (
        <div
          style={{
            margin: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TemplateLayout className='shadow-[0_0_2rem_0rem_rgba(0,0,0,0.4)]'>
            <WeddingTemplateComponent args={args} />
          </TemplateLayout>
        </div>
      );
    },
  ],
} satisfies Meta<typeof WeddingTemplates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template1: Story = {
  args: {
    id: 'tem1',
  },
};

export const Template2: Story = {
  args: {
    id: 'tem2',
  },
};

export const Template3: Story = {
  args: {
    id: 'tem3',
  },
};

export const Template4: Story = {
  args: {
    id: 'tem4',
  },
};
