import { ConfirmModal } from '@/components/client';
import useModal from '@/hooks/useModal';
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
 * **useModal** hook을 같이 사용해야합니다. 내부 showModal, closeModal 메서드를 통해 Modal을 컨트롤할 수 있고 , isShow 값을 Modal에 전달하여 사용할 수 있습니다<div className=""></div>
 * */
const meta = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    acceptButtonTitle: {
      control: 'null',
      description: 'Accept Button의 타이틀을 변경할 수 있습니다.',
    },

    rejectButtonTitle: {
      control: 'null',
      description: 'Reject Button의 타이틀을 변경할 수 있습니다.',
    },

    onAccept: {
      control: 'null',
      description: 'Accept Button 클릭시 수행될 메서드를 전달받습니다.',
    },

    onReject: {
      control: 'null',
      description:
        'Modal이 닫히기 위해 수행될 메서드를 전달받습니다. - Reject Button에도 전달됩니다.',
    },

    isShow: {
      control: 'null',
      description: 'useModal Hook에서 isShowModal을 전달 받아 모달의 공개 여부를 지정합니다.',
    },

    message: {
      control: 'null',
      description: '사용자에게 전달할 Confirm 사항 메세지를 전달합니다.',
    },

    warningMessage: {
      control: 'null',
      description: '사용자에게 전달할 경고 메세지를 전달합니다.',
    },

    clickAwayEnable: {
      control: 'null',
      description:
        'background click, Escape key를 통한 Modal 제어를 활성화 할지 전달합니다. - default : true',
    },
  },

  args: {
    onAccept: () => {},
    onReject: () => {},
    isShow: true,
    message:
      '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
    warningMessage: '사용자에게 전달할 경고 메세지 입니다.',
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (ModalComponent) => {
      const { showModal, isShowModal, closeModal } = useModal();
      return (
        <section
          style={{
            width: '100rem',
            height: '100rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            type='button'
            onClick={showModal}
            style={{
              fontSize: '14px',
              fontWeight: '800',
              color: 'grey',
              padding: '10px 15px',
              border: '4px solid grey',
              borderRadius: '8px',
            }}
          >
            모달 오픈!
          </button>

          <ModalComponent
            args={{
              isShow: isShowModal,
              onAccept: () => {},
              onReject: closeModal,
              message:
                '해당 메세지는 Confirm Modal 내부 메세지 입니다. br 태그를 이용해 줄바꿈도 가능합니다.',
              warningMessage: '사용자에게 전달할 경고 메세지 입니다.',
            }}
          />
        </section>
      );
    },
  ],
};
