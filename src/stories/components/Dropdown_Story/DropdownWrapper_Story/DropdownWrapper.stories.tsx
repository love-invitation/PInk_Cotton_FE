import { Dropdown } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## DropdownWrapper 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 래퍼 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 옵션을 선택하고, 선택된 옵션을 보거나 관리할 수 있습니다.
 *
 * ### 속성(Props)
 * - **children:** 이 컴포넌트는 자식 컴포넌트로 `Dropdown.Select`, `Dropdown.List`을 받습니다. 이를 통해 사용자는 드롭다운 내에서 선택 옵션 입력, 선택된 옵션 보기 등의 기능을 사용할 수 있습니다.
 * - **defaultValue:** 드롭다운의 기본 선택값을 설정합니다. 예를 들어, "선택 없음" 등의 값을 기본값으로 설정할 수 있습니다.
 * - **onChange:** 사용자가 옵션을 선택하거나 변경할 때마다 호출되는 콜백 함수입니다. 이 함수는 현재 선택된 옵션 값을 인자로 제공받습니다.
 * - **className:** Tailwind CSS 클래스를 사용하여 드롭다운 스타일을 추가하거나 수정할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseDropdown:**
 * - 기본 드롭다운 구현을 위해 `Dropdown.Select`와 `Dropdown.List`를 사용합니다.
 * - 사용자는 드롭다운에서 "선택 없음", "1", "2", "3" 중 하나를 선택할 수 있습니다.
 * - `defaultValue`를 통해 기본 선택값을 "선택 없음"으로 설정합니다.
 */

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown/DropdownWrapper',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        '자식 컴포넌트로 `Dropdown.Select`, `Dropdown.List`을 받습니다. 이를 통해 사용자는 다양한 드롭다운 관련 기능을 구현할 수 있습니다.',
    },
    defaultValue: {
      control: 'text',
      description:
        '드롭다운의 기본 선택값을 설정합니다. 예를 들어, "선택 없음"이 기본값일 수 있습니다.',
    },
    onChange: {
      action: 'changed',
      description:
        '드롭다운에서 선택이 변경될 때 호출되는 함수입니다. 이 함수는 현재 선택된 값을 인자로 제공받습니다.',
    },
    className: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 드롭다운 Wrapper 스타일을 추가하거나 수정할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseDropdown: Story = {
  args: {
    children: (
      <>
        <Dropdown.Select />
        <Dropdown.List list={['선택 없음', '1', '2', '3']} />
      </>
    ),
    defaultValue: '선택 없음',
    onChange: () => {},
  },
};
