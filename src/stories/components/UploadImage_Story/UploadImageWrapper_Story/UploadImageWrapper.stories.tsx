import { UploadImage } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## UploadImageWrapper 컴포넌트
 *
 * 이 컴포넌트는 이미지 업로드 기능을 구현하기 위한 래퍼 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 이미지를 업로드하고, 업로드된 이미지를 보거나 관리할 수 있습니다.
 *
 * ### 속성(Props)
 * - **children:** 이 컴포넌트는 자식 컴포넌트로 `UploadImage.Input`, `UploadImage.View`, `UploadImage.ListView`를 받습니다. 이를 통해 사용자는 이미지 업로드 입력창, 업로드된 이미지 보기, 업로드된 이미지 리스트 보기 등의 기능을 사용할 수 있습니다.
 * - **className:** Tailwind CSS 클래스를 사용하여 컴포넌트 스타일을 추가하거나 수정할 수 있습니다. 디자인 커스터마이징이 가능합니다.
 * - **limit:** 이미지를 다중으로 업로드할 때, 최대 업로드 가능한 이미지의 갯수를 제한합니다. 기본값은 1로 설정되어 있으며, 이는 단일 이미지만 업로드 가능함을 의미합니다. 다중 이미지 업로드를 원하시는 경우 이 값을 조정해 주세요.
 * - **onChange:** 사용자가 이미지를 선택하거나 제거할 때마다 호출되는 콜백 함수입니다. 이 함수는 현재 선택되어 있는 이미지들의 목록을 배열 형태로 제공받습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **SingleUploadImage:**
 * - 단일 이미지 업로드를 위해 UploadImage.Input과 UploadImage.View를 사용합니다.
 * - 업로드할 이미지를 선택하고, 선택된 이미지를 보여줍니다.
 *
 * 2. **MultipleUploadImage:**
 * - 다중 이미지 업로드를 위해 UploadImage.Input(multiple 속성 포함)과 UploadImage.ListView를 사용합니다.
 * - 여러 이미지를 선택할 수 있으며, 선택된 이미지들을 리스트 형태로 보여줍니다.
 * - limit 속성을 통해 최대 업로드 가능한 이미지 수를 제한합니다.
 */

const meta: Meta<typeof UploadImage> = {
  title: 'Components/UploadImage/UploadImageWrapper',
  component: UploadImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 UploadImageWrapper 스타일을 추가 및 수정합니다.',
    },
    limit: {
      control: 'number',
      description: '다중 이미지 업로드 사용 시 최대 이미지 갯수를 제한합니다.',
      defaultValue: 1,
    },
    onChange: {
      action: 'changed',
      description: '이미지가 변경될 때 호출되는 함수입니다.',
    },
    children: {
      description: '자식으로 올 서브 컴포넌트를 지정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleUploadImage: Story = {
  args: {
    children: (
      <>
        <UploadImage.Input>단일 이미지 업로드</UploadImage.Input>
        <UploadImage.View alt='단일 이미지 업로드' />
      </>
    ),
    limit: 1,
    onChange: () => {},
  },
};

export const MultipleUploadImage: Story = {
  args: {
    children: (
      <>
        <UploadImage.Input multiple>다중 이미지 업로드</UploadImage.Input>
        <UploadImage.ListView alt='다중 이미지 업로드' />
      </>
    ),
    limit: 10,
    onChange: () => {},
  },
};
