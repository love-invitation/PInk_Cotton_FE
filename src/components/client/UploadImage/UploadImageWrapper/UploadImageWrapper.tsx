import UploadImageInputLabel from '../UploadImageInputLabel/UploadImageInputLabel';
import UploadImageListView from '../UploadImageListView/UploadImageListView';
import UploadImageView from '../UploadImageView/UploadImageView';
import { UploadImageProvider } from '../context/UploadImageContext/UploadImageContext';
import { UploadImageWrapperProps } from './UploadImageWrapper.type';

import { twMerge } from 'tailwind-merge';

const UploadImageWrapper = ({ className, limit, onChange, children }: UploadImageWrapperProps) => {
  const style = twMerge('flex flex-col justify-center items-center', className);

  return (
    <UploadImageProvider
      limit={limit}
      onChange={onChange}
    >
      <div className={style}>{children}</div>
    </UploadImageProvider>
  );
};

UploadImageWrapper.InputLabel = UploadImageInputLabel;
UploadImageWrapper.View = UploadImageView;
UploadImageWrapper.ListView = UploadImageListView;

export default UploadImageWrapper;
