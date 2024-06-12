import { ChangeEvent, ReactNode } from 'react';

export interface UploadImageContextProps {
  images: File[];
  handleUploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (selectedImage: File) => void;
  handleClearImage: () => void;
}

export interface UploadImageContextProviderProps {
  children: ReactNode;
  limit?: number;
  onChange: (images: File[]) => void;
}
