import { WeddingTemplatesProps } from './WeddingTemplates.type';
import {
  WeddingTemplate1,
  WeddingTemplate2,
  WeddingTemplate3,
  WeddingTemplate4,
} from './components';

const WeddingTemplates = ({
  id,
  details = '',
  brideName,
  groomName,
  imageUrl,
}: WeddingTemplatesProps) => {
  /**
   * 서버에서 받아온 데이터의 경우 데이터는 \n로 보이지만
   * 실제로는 \\n으로 강제 변환되는 경우가 존재함 따라서 아래와같이 Replace를 수행함
   */
  const detailReplace = details.replace(/\\n | \n/g, '\n');

  switch (id) {
    case '1':
      return (
        <WeddingTemplate1
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );

    case '2':
      return (
        <WeddingTemplate2
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );

    case '3':
      return (
        <WeddingTemplate3
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );

    case '4':
      return (
        <WeddingTemplate4
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );

    default:
      return (
        <WeddingTemplate1
          details={detailReplace}
          groomName={groomName}
          brideName={brideName}
          imageUrl={imageUrl}
        />
      );
  }
};

export default WeddingTemplates;
