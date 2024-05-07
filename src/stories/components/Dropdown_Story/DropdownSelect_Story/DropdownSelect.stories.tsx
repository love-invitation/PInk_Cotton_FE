import { Dropdown } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## DropdownSelect 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 서브 컴포넌트입니다. 반드시 최상위 Dropdown을 자식으로 사용되어야 하고 사용자는 선택된 옵션을 보거나 관리할 수 있습니다.
 *
 * ### 속성(Props)
 * - **className:** Tailwind CSS 클래스를 사용하여 드롭다운 Select의 스타일을 추가하거나 수정할 수 있습니다.
 * - **...rest:** p태그에 전달할 수 있는 모든 속성입니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseDropdownSelect:**
 * - 최상위 Dropdown의 Props의 defaultValue를 통해 기본 선택값을 "select 초기 선택 값"으로 설정합니다.
 */

const meta: Meta<typeof Dropdown.Select> = {
  title: 'Components/Dropdown/DropdownSelect',
  component: Dropdown.Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 드롭다운 버튼의 스타일을 추가하거나 수정할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseDropdownSelect: Story = {
  decorators: [
    (DropdownSelect, { args }) => {
      return (
        <Dropdown
          defaultValue='select 초기 선택 값'
          onChange={() => {}}
        >
          <DropdownSelect args={args} />
        </Dropdown>
      );
    },
  ],
  args: {},
};
