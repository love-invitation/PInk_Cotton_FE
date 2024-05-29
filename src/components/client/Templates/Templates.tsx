import { Template1 } from './components';

const Templates = ({ id }: { id: string }) => {
  switch (id) {
    case 'tem1':
      return (
        <Template1
          detail='2025.10.20.토요일 오후 2시 \n 메종 드 프라이어 그랜드홀'
          groomName='도레미'
          brideName='파솔라'
        />
      );

    default:
      return (
        <Template1
          detail='2025.10.20.토요일 오후 2시 \n 메종 드 프라이어 그랜드홀'
          groomName='도레미'
          brideName='파솔라'
        />
      );
  }
};

export default Templates;
