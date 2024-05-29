import { TemplatesProps } from './Templates.type';
import { Template1 } from './components';

const Templates = ({ id, details = '', brideName, groomName, imageUrl }: TemplatesProps) => {
  /**
   * 서버에서 받아온 데이터의 경우 데이터는 \n로 보이지만
   * 실제로는 \\n으로 강제 변환되는 경우가 존재함 따라서 아래와같이 Replace를 수행함
   */
  const detailReplace = details.replace(/\\n | \n/g, '\n');

  switch (id) {
    case 'tem1':
      return (
        <Template1
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );

    default:
      return (
        <Template1
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );
  }
};

export default Templates;