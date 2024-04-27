import { useState } from 'react';

import { CheckBox } from '@/components/client';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## CheckBox Component
 *
 * ### Props
 * - **checked : **CheckBox의 check 상태를 boolean을 통해 전달합니다.
 * - **size ? : **CheckBox의 크기를 지정합니다. - number ( px 단위 )
 * - **disabled ? : **CheckBox를 disabled 상태를 지정합니다. - default : false
 *
 * - **className ? : **추가적인 스타일을 정의할때 tailwind를 이용하여 지정합니다.
 * - **type ? : **이넘 타입으로 "checkbox" 만을 허용합니다. - input의 기본 여러 type을 방지하기 위해 Default 값을 지정
 * - **id ? : **사용되는 위치에서 label과의 연동을 위해 id값을 기입할 수 있습니다.
 *
 * rest Props를 통해 Input의 속성을 그대로 전달 받습니다.
 * */
const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    checked: {
      control: 'boolean',
      description: 'CheckBox의 check 상태를 boolean을 통해 전달합니다.',
    },
    size: {
      control: 'number',
      description: 'CheckBox의 크기를 지정합니다. - number ( px 단위 )',
    },
    className: {
      control: 'text',
      description: '추가적인 스타일을 정의할때 tailwind를 이용하여 지정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: 'CheckBox를 disabled 상태를 지정합니다. - default : false',
    },
    type: {
      control: 'inline-radio',
      options: ['checkbox'],
      description:
        '이넘 타입으로 "checkbox" 만을 허용합니다. - input의 기본 여러 type을 방지하기 위해 Default 값을 지정',
    },
    id: {
      control: 'text',
      description: '사용되는 위치에서 label과의 연동을 위해 id값을 기입할 수 있습니다.',
    },
  },

  args: {
    checked: true,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (CheckBoxComponent, { args }) => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <CheckBoxComponent
          args={{ ...args, checked: isChecked, onClick: () => setIsChecked((state) => !state) }}
        />
      );
    },
  ],
};

export const CheckedTrue: Story = {
  args: {
    checked: true,
  },
};

export const CheckedFalse: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
