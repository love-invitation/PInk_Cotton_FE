'use client';

import { AlertModal } from '@/components/client';
import useModal from '@/hooks/useModal';

const Home = () => {
  const { showModal, closeModal, isShowModal } = useModal();
  return (
    <main className='h-full w-full'>
      <button
        type='button'
        onClick={showModal}
      >
        모달 열기
      </button>

      <AlertModal
        isShow={isShowModal}
        onClose={closeModal}
        message='이건 테스트용 알림 모달 입니다.<br> 이건 테스트용 컨펌 모달 입니다. 이건 테스트용 컨펌 모달 입니다. 이건 테스트용 컨펌 모달 입니다.'
      />
    </main>
  );
};

export default Home;
