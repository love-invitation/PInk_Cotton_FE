import { TemplateCard } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## TemplateCard Component
 *
 * PinkCotton 내부에서 사용되어지는 Template Card & Mockup Card 입니다
 *
 *  ### Props
 *  - **size : **`small` `medium` `large` 를 전달시 일반 Template Card, `mockup` 을 전달시 Phone mockup Card가 제공됩니다.
 *  - **children ? : **Card 내부에 전달할 요소를 전달받습니다.
 *  - **className ? : **TemplateCard의 layout을 스타일링 할 수 있습니다. - **tailwindCSS**
 */

const meta = {
  title: 'Components/TemplateCard',
  component: TemplateCard,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large', 'mockup'],
      description:
        '`small` `medium` `large` 를 전달시 일반 Template Card, `mockup` 을 전달시 Phone mockup Card가 제공됩니다.',
    },
    children: {
      control: { disable: true },
      description: 'Card 내부에 전달할 요소를 전달받습니다.',
    },
    className: {
      control: 'text',
      description: 'TemplateCard의 layout을 스타일링 할 수 있습니다. - **tailwindCSS**',
    },
  },

  args: {
    size: 'mockup',
    children: null,
  },

  decorators: [
    (TemplateCardComponent) => {
      return (
        <section
          style={{
            width: '45rem',
            height: '85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TemplateCardComponent />
        </section>
      );
    },
  ],
} satisfies Meta<typeof TemplateCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
