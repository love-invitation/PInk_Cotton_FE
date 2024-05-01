import { FormProvider, useForm } from 'react-hook-form';

import { TextEditor } from '@/components/client';
import { EditorView } from '@/components/server';
import { Meta, StoryObj } from '@storybook/react';

/**
 * ## TextEditor 컴포넌트
 *
 * - 이 컴포넌트를 통해 사용자는 텍스트 입력 및 편집이 가능합니다.
 * - 해당 컴포넌트는 `react-hook-form`과 함께 사용이 가능하며, form 데이터의 관리와 검증을 손쉽게 할 수 있습니다.
 * - 편집된 텍스트는 자동으로 부모 Form에 연결되며, 실시간으로 데이터 반영이 가능한 `EditorView` 컴포넌트에 보여집니다.
 *
 * ### 속성(Props)
 * - **name:** react-hook-form의 `setValue` 함수에 쓰이는 필드 이름입니다. 이 컴포넌트 내부의 데이터와 연결하기 위해 사용됩니다. 기본값은 'content'입니다.
 * - **className:** Tailwind CSS를 사용하여 TextEditor 스타일을 추가 또는 수정할 때 사용합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseTextEditor:**
 * - 기본 텍스트 에디터 기능을 보여주는 예제입니다.
 * - react-hook-form을 사용한 FormProvider 내에서 동작하며, 사용자가 입력한 텍스트 데이터는 `EditorView` 컴포넌트를 통해 실시간으로 확인할 수 있습니다.
 */

const meta: Meta<typeof TextEditor> = {
  title: 'Components/TextEditor',
  component: TextEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 TextEditor 스타일을 추가 및 수정합니다.',
    },
    name: {
      control: 'text',
      description: 'react-hook-form의 setValue 함수의 name 값을 전달합니다.',
      defaultValue: 'content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseTextEditor: Story = {
  decorators: [
    (TextEditorComponent) => {
      const form = useForm();

      return (
        <FormProvider {...form}>
          <TextEditorComponent />
          <EditorView value={form.watch('content')} />
        </FormProvider>
      );
    },
  ],
  args: {
    name: 'content',
  },
};
