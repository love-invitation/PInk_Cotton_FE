import { Accordion } from '@/components/client';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Accordion Component
 *
 * ### Props
 * - **children : **Accordion 내부에 담을 Component를 전달받습니다.
 *
 * - **buttonTitle ? : **Accordion Toggle Button 내부 타이틀을 전달받습니다.
 * - **type ? : **둘중 하나의 type을 전달받아 스타일을 변경합니다.  - main : 홈 질문 - edit : 청첩장 제작 - account : 청첩장 뷰
 * - **defaultToggleValue ? : **Accordion의 기본 toggle 상태를 전달받습니다.
 * */
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    type: {
      description:
        '둘중 하나의 type을 전달받아 스타일을 변경합니다.  - main : 홈 질문 - edit : 청첩장 제작 - account : 청첩장 뷰',
    },
    buttonTitle: {
      control: 'text',
      description: 'Accordion Toggle Button 내부 타이틀을 전달받습니다.',
    },
    defaultToggleValue: {
      control: 'boolean',
      description: 'Accordion의 기본 toggle 상태를 전달받습니다.',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'Accordion 내부에 담을 Component를 전달받습니다.',
    },
  },

  args: {
    type: 'edit',
    buttonTitle: '아코디언 버튼 제목입니다.',
    children: (
      <div
        style={{
          height: '20rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.4rem',
        }}
      >
        아코디언 내부 Content
      </div>
    ),
  },

  decorators: [
    (AccordionComponent, { args }) => {
      return (
        <div
          style={{
            width: '50rem',
          }}
        >
          <AccordionComponent args={args} />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeEdit: Story = {};

export const TypeMain: Story = {
  args: {
    type: 'main',
  },
};
