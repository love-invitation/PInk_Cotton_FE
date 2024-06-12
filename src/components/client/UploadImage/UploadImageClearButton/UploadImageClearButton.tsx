import { Button } from '../..';
import { useUploadImageContext } from '../context';

const UploadImageClearButton = () => {
  const { handleClearImage } = useUploadImageContext();

  return <Button onClick={handleClearImage}>전체 삭제</Button>;
};

export default UploadImageClearButton;
