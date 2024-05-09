import { TemplateItem } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## Template Item Component
 *
 *  ### Props
 *  - **children : **Template Item 내부에 보여질 Template를 전달받습니다.
 *  - **name : **해당 Template의 이름을 전달받습니다.
 *  - **price : **현재 Template의 가격( 할인 상품일시 원가 )을 전달받습니다.
 *  - **id : **현재 Template의 id를 전달받습니다.
 *
 *  - **isNew ? : **Template이 새 상품인지에 대한 상태를 전달받습니다.
 *  - **discountPrice ? : **해당 Template가 할인 상품일시 할인된 가격을 전달받습니다.
 */

const meta = {
  title: 'Components/TemplateItem',
  component: TemplateItem,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: { disable: true },
      description: 'Template Item 내부에 보여질 Template를 전달받습니다.',
    },

    name: {
      control: 'text',
      description: '해당 Template의 이름을 전달받습니다.',
    },

    price: {
      control: 'number',
      description: '현재 Template의 가격( 할인 상품일시 원가 )을 전달받습니다.',
    },

    id: {
      control: { disable: true },
      description: '현재 Template의 id를 전달받습니다.',
    },

    isNew: {
      control: 'boolean',
      description: 'Template이 새 상품인지에 대한 상태를 전달받습니다.',
    },

    discountPrice: {
      control: 'number',
      description: '해당 Template가 할인 상품일시 할인된 가격을 전달받습니다.',
    },
  },

  args: {
    children: null,
    name: 'Template Name',
    price: '14,000',
    id: 'example_template',
  },
} satisfies Meta<typeof TemplateItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NewTemplateItem: Story = {
  args: {
    isNew: true,
  },
};

export const DiscountTemplateItem: Story = {
  args: {
    discountPrice: '9,900',
  },
};
