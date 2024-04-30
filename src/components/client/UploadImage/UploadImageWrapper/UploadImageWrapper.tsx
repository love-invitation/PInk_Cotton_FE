import UploadImageInputLabel from '../UploadImageInputLabel/UploadImageInputLabel';
import UploadImageListView from '../UploadImageListView/UploadImageListView';
import UploadImageView from '../UploadImageView/UploadImageView';
import { UploadImageContextProvider } from '../context/UploadImageContext/UploadImageContext';
import { UploadImageWrapperProps } from './UploadImageWrapper.type';

import { twMerge } from 'tailwind-merge';

const UploadImageWrapper = ({ className, limit, onChange, children }: UploadImageWrapperProps) => {
  return (
    <UploadImageContextProvider
      limit={limit}
      onChange={onChange}
    >
      <div className={twMerge('flex flex-col justify-center items-center', className)}>
        {children}
      </div>
    </UploadImageContextProvider>
  );
};

UploadImageWrapper.InputLabel = UploadImageInputLabel;
UploadImageWrapper.View = UploadImageView;
UploadImageWrapper.ListView = UploadImageListView;

export default UploadImageWrapper;
