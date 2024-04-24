import { Button } from '@/components/client';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Button Component
 *
 * ### Props
 * - **children : **Button 내부 요소를 전달합니다.
 *
 * - **radius ? : **Button의 radius값을 지정합니다. `0.4rem` `0.8rem` `1.4rem` `rounded` \- **default : `0.4rem`**
 * - **border ? : **Button의 border의 사용 여부와 색상값을 지정합니다. `gray` `pink` `none` \- **default : `none`**
 *
 * - **fontSize ? : **Button의 내부 fontSize를 지정합니다. `1.4rem` `1.8rem` `2rem` \- **default : `1.4rem`**
 * - **fontWeight ? : **Button의 내부 fontWeight값을 지정합니다 `regular` `semiBold` `bold` `extraBold` \- **default : `semiBold`**
 * - **fontColor ? : **Button의 내부 fontColor를 지정합니다. `white` `black` `brown` `gray` \- **default : `white`**
 *
 * - **backgroundColor ? : **Button의 background 색상을 지정합니다. `white` `black` `pink` `brown` `naked` \- **default : `pink`**
 * - **shadow ? : **Button의 shadow 사용 여부를 지정합니다. `true` `false` \- **default : `false`**
 *
 * - **className ? : **추가적인 스타일을 정의할때 tailwind를 이용하여 지정합니다.
 * - **onClick ? : **버튼을 글릭한 경우 실행되어질 동작을 정의합니다. ( e.preventDefault() 동작 ) \- type : `() => void`
 * - **disabled ? : **Button의 disabled 사용 여부를 지정합니다. `true` `false` \- **default : `false`**
 * */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      description: 'Button 내부 요소를 전달합니다.',
    },
    radius: {
      control: 'inline-radio',
      options: ['0.4rem', '0.8rem', '1.4rem', 'rounded'],
      description: 'Button의 radius값을 지정합니다.',
    },
    border: {
      control: 'inline-radio',
      options: ['gray', 'pink', 'none'],
      description: 'Button의 border의 사용 여부와 색상값을 지정합니다.',
    },
    fontSize: {
      control: 'inline-radio',
      options: ['1.4rem', '1.8rem', '2rem'],
      description: 'Button의 내부 fontSize를 지정합니다.',
    },
    fontWeight: {
      control: 'inline-radio',
      options: ['regular', 'semiBold', 'bold', 'extraBold'],
      description: 'Button의 내부 fontWeight값을 지정합니다.',
    },
    fontColor: {
      control: 'inline-radio',
      options: ['white', 'black', 'brown', 'gray'],
      description: 'Button의 내부 fontColor를 지정합니다.',
    },
    backgroundColor: {
      control: 'inline-radio',
      options: ['white', 'black', 'pink', 'brown', 'gray', 'naked'],
      description: 'Button의 background 색상을 지정합니다.',
    },
    shadow: {
      control: 'boolean',
      description: 'Button의 shadow 사용 여부를 지정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: 'Button의 disabled 상태 부여를 지정합니다.',
    },
  },

  args: {
    children: '테스트용 버튼입니다.',
    className: 'w-fit',
  },

  decorators: [
    (ButtonComponent) => (
      <div
        style={{
          width: '20rem',
          height: '8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ButtonComponent />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DisabledTrue: Story = {
  args: {
    disabled: true,
  },
};

export const SampleOne: Story = {
  args: {
    fontColor: 'brown',
    backgroundColor: 'brown',
    border: 'gray',
    shadow: true,
  },
};

export const SampleTwo: Story = {
  args: {
    fontColor: 'white',
    backgroundColor: 'black',
    fontSize: '1.8rem',
    className: 'w-full h-[6rem]',
  },
};
