import { UploadImage } from '@/components/client';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## UploadImageListView 컴포넌트
 *
 * UploadImageListView 컴포넌트는 사용자가 선택한 다중 이미지 파일을 선택하고 미리 볼 수 있습니다.
 *
 * ### Props 속성
 * - **ulClassName:** Tailwind CSS 클래스를 사용하여 ul태그 스타일을 추가하거나 수정할 수 있습니다. 디자인 커스터마이징이 가능합니다.
 * - **liClassName:** Tailwind CSS 클래스를 사용하여 li태그 스타일을 추가하거나 수정할 수 있습니다. 디자인 커스터마이징이 가능합니다.
 * - **...rest:** 이 컴포넌트는 Next/Image 컴포넌트를 내부적으로 사용합니다. src 속성을 제외한 Next/Image의 모든 옵션 값을 `...rest`를 통해 전달할 수 있습니다. 기본 설정으로는 `fill`, `objectFit='cover'`, `objectPosition='center'`, `className='border-0 rounded-[0.5rem]'`가 적용됩니다.
 *
 * ### 사용 사례(Stories)
 * 1. **SingleUploadImageListView:**
 * - 이 스토리는 사용자가 선택한 다중 이미지 파일을 미리보기 위한 기본 설정을 보여줍니다. 사용자는 선택한 이미지 모두 볼 수 있습니다.
 */

const meta: Meta<typeof UploadImage.ListView> = {
  title: 'Components/UploadImage/UploadImageListView',
  component: UploadImage.ListView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ulClassName: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 ul태그 스타일을 추가하거나 수정할 수 있습니다. 디자인 커스터마이징이 가능합니다.',
    },
    liClassName: {
      control: 'text',
      description:
        'Tailwind CSS 클래스를 사용하여 li태그 스타일을 추가하거나 수정할 수 있습니다. 디자인 커스터마이징이 가능합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UploadImageListView: Story = {
  decorators: [
    (Story) => {
      return (
        <UploadImage
          limit={10}
          onChange={() => {}}
        >
          <UploadImage.Input multiple>다중 이미지 업로드 뷰</UploadImage.Input>
          <Story />
        </UploadImage>
      );
    },
  ],
  args: {},
};
