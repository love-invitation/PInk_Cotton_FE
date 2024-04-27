import { FormProvider, useForm } from 'react-hook-form';

import InputWrapper from '@/components/client/Input/InputWrapper/InputWrapper';
import { Meta, StoryObj } from '@storybook/react';

/**
 *  ## InputWrapper.Input Component
 *
 *  ### Props
 *  - **className : **Tailwind CSS를 사용하여 InputWrapper.Input의 스타일을 추가 및 수정 합니다.
 *  - **registerOptions: **react-hook-form registerOptions 옵션들을 지원합니다.
 *  - **...rest : **input태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Input/Input',
  component: InputWrapper.Input,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    className: {
      control: 'text',
      description: 'Tailwind CSS를 사용하여 Input의 스타일을 추가 및 수정 합니다.',
    },
    registerOptions: {
      control: 'object',
      description: 'react-hook-form registerOptions 옵션들을 지원합니다.',
    },
    placeholder: {
      control: 'text',
      description: '입력 필드에 표시될 플레이스홀더 텍스트를 설정합니다.',
    },
    name: {
      control: 'text',
      description: '입력 필드의 이름을 설정하며, 폼 제출시 사용될 필드의 키값입니다.',
    },
    type: {
      control: 'text',
      description:
        '입력 필드의 유형을 설정합니다. 예: "text", "email", "number", "password", "tel" 등.',
    },
    disabled: {
      control: 'boolean',
      description:
        '입력 필드를 비활성화 상태로 설정합니다. 참일 경우, 사용자는 필드에 입력할 수 없습니다.',
    },
  },

  decorators: [
    (InputComponent, { args }) => {
      const form = useForm();
      const { watch, getValues } = form;
      watch();

      return (
        <FormProvider {...form}>
          <InputComponent args={args} />
          <p style={{ margin: '1rem 0rem', color: 'black' }}>{JSON.stringify(getValues())}</p>
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof InputWrapper.Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    type: 'text',
    placeholder: '기본 입력',
    name: 'defaultName',
  },
};

export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: '이메일 주소',
    name: 'email',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    placeholder: '비밀번호',
    name: 'password',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: '숫자',
    name: 'number',
  },
};

export const TelInput: Story = {
  args: {
    type: 'tel',
    placeholder: '전화번호',
    name: 'tel',
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: '비활성화됨',
    name: 'disabled',
    disabled: true,
  },
};
