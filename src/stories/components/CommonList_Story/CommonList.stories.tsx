import { CommonList } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## CommonList 컴포넌트
 * - 이 컴포넌트는 데이터 리스트를 보여주는 컴포넌트입니다.
 * - 데이터 배열을 받아 각 항목을 리스트 형태로 표시합니다.
 * - data props에 따라 타입이 추론되어 children 함수 매개변수로 해당 타입에 따른 데이터를 사용하시면 됩니다.
 *
 * ### 속성(Props)
 * - **data:** 리스트를 구성할 데이터 배열입니다.
 * - **className:** Tailwind CSS를 사용하여 ul 태그에 스타일을 추가 및 수정할 수 있습니다.
 * - **children:** 각 데이터 아이템으로부터 JSX를 반환하는 함수입니다. 반환된 JSX는 리스트의 각 항목을 표현합니다. 이 함수는 항목의 `id`와 `name`을 파라미터로 받습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseCommonList:**
 * - 기본적인 데이터 리스트를 출력하는 사례입니다. `data` 속성을 통해 리스트 데이터를 전달하고, `children` 속성을 통해 각 항목을 어떻게 렌더링할지 정의합니다.
 */

const meta: Meta<typeof CommonList> = {
  title: 'Components/CommonList',
  component: CommonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: '리스트를 구성할 데이터 배열입니다.',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 ul 태그에 스타일을 추가 및 수정합니다.',
    },
    children: {
      control: { disabled: true },
      description:
        '각 데이터 아이템으로부터 JSX를 반환하는 함수입니다. 반환된 JSX는 리스트의 각 항목을 표현합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCommonList: Story = {
  args: {
    data: [
      { id: 1, name: '항목 1' },
      { id: 2, name: '항목 2' },
    ],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ({ id, name }: any) => {
      return <li key={id}>{name}</li>;
    },
  },
};
