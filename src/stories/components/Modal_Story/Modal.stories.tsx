import { Button } from '@/components/client';
import { Modal } from '@/components/client/Modal';
import { useModal } from '@/hooks';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * ## Modal Base Component
 *
 * ### Props
 * - **isShow : **현재 Modal이 보여질지에 대해 boolean 값을 제공합니다.
 * - **onClose ? : **Modal을 닫기위한 상태를 false값으로 변경할수 있는 useModal hook의 close 메서드를 전달합니다.
 * - **children ? : **Modal내부에 표현할 Component 혹은 내용을 전달합니다.
 * - **clickAwayEnable :**Background 클릭, esc키를 통해 Modal 닫기 기능을 사용할지에 대해 전달합니다 - default : false
 *
 * 🔥 Modal을 제작하기 위한 layout역할을 하는 Modal Base Component 입니다.
 * <br>
 * **useModal** hook을 같이 사용해야합니다. 내부 showModal, closeModal 메서드를 통해 Modal을 컨트롤할 수 있고 , isShow 값을 Modal에 전달하여 사용할 수 있습니다.
 * */
const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    isShow: {
      control: { disable: true },
      description: '현재 Modal이 보여질지에 대해 boolean 값을 제공합니다.',
    },

    onClose: {
      control: { disable: true },
      description:
        'Modal을 닫기위한 상태를 false값으로 변경할수 있는 useModal hook의 close 메서드를 전달합니다.',
    },

    children: {
      control: { disable: true },
      description: 'Modal내부에 표현할 Component 혹은 내용을 전달합니다.',
    },

    clickAwayEnable: {
      control: { disable: true },
      description:
        'Background 클릭, esc키를 통해 Modal 닫기 기능을 사용할지에 대해 전달합니다 - default : false',
      defaultValue: false,
    },
  },

  args: {
    isShow: false,
    onClose: () => {},
    children: '모달 생성을 위한 Modal Base Layout 입니다.',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (ModalComponent, { args }) => {
      const { showModal, isShowModal, closeModal } = useModal();

      const { children = '모달 생성을 위한 Modal Base Layout 입니다.', clickAwayEnable = true } =
        args;
      return (
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button onClick={showModal}>모달 오픈!</Button>

          <ModalComponent
            args={{
              isShow: isShowModal,
              onClose: closeModal,
              children,
              clickAwayEnable,
            }}
          />
        </section>
      );
    },
  ],
};
