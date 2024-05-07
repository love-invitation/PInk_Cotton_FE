import { Dropdown } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## DropdownList 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 서브 컴포넌트입니다. 반드시 최상위 Dropdown 컴포넌트 내부에서 사용되어야 하며, 사용자는 이를 통해 옵션 항목들을 보거나 선택할 수 있습니다.
 *
 * ### 속성(Props)
 * - **list:** 드롭다운에 표시될 항목들의 목록입니다.
 * - **ulClassName:** `ul` 태그에 적용할 Tailwind CSS 클래스입니다. 드롭다운 리스트의 스타일을 추가하거나 수정할 때 사용합니다.
 * - **buttonClassName:** 각 `button` 태그에 적용할 Tailwind CSS 클래스입니다. 드롭다운 리스트의 각 항목의 스타일을 추가하거나 수정할 때 사용합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseDropdownList:**
 * - 최상위 Dropdown 컴포넌트의 `defaultValue`를 통해 기본 선택값을 설정합니다. 예시에서는 "1"을 기본값으로 설정하였습니다.
 */

const meta: Meta<typeof Dropdown.List> = {
  title: 'Components/Dropdown/DropdownList',
  component: Dropdown.List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    list: {
      control: 'object',
      description: '드롭다운에 표시될 항목들의 목록입니다.',
    },
    ulClassName: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 `ul` 태그에 스타일을 추가하거나 수정할 수 있습니다.',
    },
    buttonClassName: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 `button` 태그에 스타일을 추가하거나 수정할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseDropdownList: Story = {
  decorators: [
    (DropdownList, { args }) => {
      return (
        <Dropdown
          defaultValue='1'
          onChange={() => {}}
        >
          <Dropdown.Select />
          <DropdownList args={args} />
        </Dropdown>
      );
    },
  ],
  args: {
    list: ['1', '2', '3', '4'],
  },
};
